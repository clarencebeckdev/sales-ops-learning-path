// Simple interactive viewer for the Sales Ops Learning Path modules.

(function () {
  const sidebarEl = document.getElementById('sidebar');
  const moduleMetaEl = document.getElementById('module-meta');
  const moduleContentEl = document.getElementById('module-content');
  const quizEl = document.getElementById('quiz');
  const flashcardsEl = document.getElementById('flashcards');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const progressEl = document.getElementById('progress');

  let currentIndex = 0;

  function groupBySection(modules) {
    const sections = {};
    for (const m of modules) {
      if (!sections[m.section]) sections[m.section] = [];
      sections[m.section].push(m);
    }
    return sections;
  }

  function renderSidebar() {
    const sections = groupBySection(MODULES);
    sidebarEl.innerHTML = '';

    // Flashcards entry
    const flashTitle = document.createElement('div');
    flashTitle.className = 'sidebar-section-title';
    flashTitle.textContent = 'Practice';
    sidebarEl.appendChild(flashTitle);

    const flashItem = document.createElement('div');
    flashItem.className = 'sidebar-item';
    flashItem.dataset.id = 'flashcards';

    const flashLabel = document.createElement('div');
    flashLabel.className = 'sidebar-item-label';
    flashLabel.textContent = 'Flashcard Game';

    const flashTag = document.createElement('div');
    flashTag.className = 'sidebar-item-tag';
    flashTag.textContent = 'terms & acronyms';

    flashItem.appendChild(flashLabel);
    flashItem.appendChild(flashTag);

    flashItem.addEventListener('click', () => {
      currentIndex = -1; // special index for flashcards
      renderModule();
    });

    sidebarEl.appendChild(flashItem);

    Object.entries(sections).forEach(([sectionName, items]) => {
      const title = document.createElement('div');
      title.className = 'sidebar-section-title';
      title.textContent = sectionName;
      sidebarEl.appendChild(title);

      items.forEach((m) => {
        const item = document.createElement('div');
        item.className = 'sidebar-item';
        item.dataset.id = m.id;

        const label = document.createElement('div');
        label.className = 'sidebar-item-label';
        label.textContent = m.title;

        const tag = document.createElement('div');
        tag.className = 'sidebar-item-tag';
        tag.textContent = m.tag;

        item.appendChild(label);
        item.appendChild(tag);

        item.addEventListener('click', () => {
          const idx = MODULES.findIndex((x) => x.id === m.id);
          if (idx !== -1) {
            currentIndex = idx;
            renderModule();
          }
        });

        sidebarEl.appendChild(item);
      });
    });
  }

  function renderQuiz(module) {
    if (!module.quiz || !module.quiz.length) {
      quizEl.classList.add('hidden');
      quizEl.innerHTML = '';
      return;
    }

    const q = module.quiz[0];
    quizEl.classList.remove('hidden');
    quizEl.innerHTML = '';

    const title = document.createElement('div');
    title.className = 'quiz-title';
    title.textContent = 'Quick check';

    const question = document.createElement('div');
    question.className = 'quiz-question';
    question.textContent = q.q;

    const options = document.createElement('div');
    options.className = 'quiz-options';

    q.options.forEach((opt, idx) => {
      const row = document.createElement('label');
      row.className = 'quiz-option';

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'quiz-option';
      input.value = String(idx);

      const span = document.createElement('span');
      span.textContent = opt;

      row.appendChild(input);
      row.appendChild(span);
      options.appendChild(row);
    });

    const feedback = document.createElement('div');
    feedback.className = 'quiz-feedback';

    options.addEventListener('change', (e) => {
      const target = e.target;
      if (target && target.name === 'quiz-option') {
        const selected = Number(target.value);
        if (selected === q.answer) {
          feedback.textContent = '✓ Correct: ' + q.explanation;
          feedback.className = 'quiz-feedback ok';
        } else {
          feedback.textContent = '✕ Not quite: ' + q.explanation;
          feedback.className = 'quiz-feedback bad';
        }
      }
    });

    quizEl.appendChild(title);
    quizEl.appendChild(question);
    quizEl.appendChild(options);
    quizEl.appendChild(feedback);
  }

  function renderModule() {
    if (currentIndex === -1) {
      // flashcards mode
      const items = sidebarEl.querySelectorAll('.sidebar-item');
      items.forEach((item) => {
        if (item.dataset.id === 'flashcards') item.classList.add('active');
        else item.classList.remove('active');
      });

      moduleMetaEl.textContent = 'Practice • flashcards';
      moduleContentEl.innerHTML = '<h1>Flashcard Game</h1><p>Test yourself on key sales ops terms and acronyms. Try to recall the definition, then reveal it and mark whether you knew it.</p>';
      quizEl.classList.add('hidden');
      quizEl.innerHTML = '';
      flashcardsEl.classList.remove('hidden');
      flashcardsEl.innerHTML = '';
      initFlashcards('flashcards');

      progressEl.textContent = 'Practice mode';
      prevBtn.disabled = false;
      nextBtn.disabled = false;
      return;
    }

    const module = MODULES[currentIndex];
    if (!module) return;

    // highlight sidebar
    const items = sidebarEl.querySelectorAll('.sidebar-item');
    items.forEach((item) => {
      if (item.dataset.id === module.id) item.classList.add('active');
      else item.classList.remove('active');
    });

    flashcardsEl.classList.add('hidden');
    flashcardsEl.innerHTML = '';

    moduleMetaEl.textContent = `${module.section} • ${module.tag}`;
    moduleContentEl.innerHTML = module.content;
    renderQuiz(module);

    progressEl.textContent = `Module ${currentIndex + 1} of ${MODULES.length}`;
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === MODULES.length - 1;
  }

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      renderModule();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < MODULES.length - 1) {
      currentIndex += 1;
      renderModule();
    }
  });

  // init
  renderSidebar();
  currentIndex = 0;
  renderModule();
})();
