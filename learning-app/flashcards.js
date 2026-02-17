// Flashcard data and simple flashcard game logic

const FLASHCARDS = [
  // Core roles & functions
  {
    term: 'Sales Operations (Sales Ops)',
    definition:
      'Function that designs and maintains the sales process, systems, data, and reporting so the sales org can be organized, measurable, and scalable.',
    tags: ['role'],
  },
  {
    term: 'Revenue Operations (RevOps)',
    definition:
      'A broader function that aligns sales, marketing, and customer success operations across the full revenue funnel.',
    tags: ['role'],
  },

  // Lifecycle acronyms
  {
    term: 'Lead',
    definition:
      'A person or company that has shown some interest or has been identified as a potential customer, but is not yet fully qualified.',
    tags: ['lifecycle'],
  },
  {
    term: 'MQL (Marketing Qualified Lead)',
    definition:
      'A lead that meets marketing’s fit and/or behavior criteria and is considered ready to be passed to sales.',
    tags: ['lifecycle', 'acronym'],
  },
  {
    term: 'SAL (Sales Accepted Lead)',
    definition:
      'An MQL that sales has reviewed and accepted into their queue as something they will actively work.',
    tags: ['lifecycle', 'acronym'],
  },
  {
    term: 'SQL (Sales Qualified Lead)',
    definition:
      'A lead that sales has spoken with and determined is a real opportunity worth pursuing.',
    tags: ['lifecycle', 'acronym'],
  },

  // Qualification frameworks
  {
    term: 'BANT',
    definition:
      'Qualification framework: Budget, Authority, Need, Timeline.',
    tags: ['framework', 'acronym'],
  },
  {
    term: 'MEDDIC',
    definition:
      'Qualification framework: Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion.',
    tags: ['framework', 'acronym'],
  },
  {
    term: 'Economic Buyer',
    definition:
      'The person who ultimately controls the budget and can approve or block the purchase.',
    tags: ['framework'],
  },
  {
    term: 'Champion',
    definition:
      'An internal advocate at the prospect’s organization who wants you to win and can influence the decision.',
    tags: ['framework'],
  },

  // Pipeline & stages
  {
    term: 'Opportunity',
    definition:
      'A specific potential deal tracked in the CRM with an amount, stage, and expected close date.',
    tags: ['pipeline'],
  },
  {
    term: 'Pipeline',
    definition:
      'All active opportunities in various stages that could result in revenue.',
    tags: ['pipeline'],
  },
  {
    term: 'Pipeline Stage',
    definition:
      'A defined step in the sales process that represents a meaningful change in how far along a deal is.',
    tags: ['pipeline'],
  },
  {
    term: 'Commit',
    definition:
      'A late-stage pipeline category where the rep and manager believe a deal is very likely to close within the period.',
    tags: ['pipeline'],
  },

  // Core metrics
  {
    term: 'Win Rate',
    definition:
      'Percentage of opportunities that end as Closed Won out of all closed (Won + Lost) opportunities.',
    tags: ['metric'],
  },
  {
    term: 'Conversion Rate',
    definition:
      'Percentage of leads or opportunities that move from one stage to the next.',
    tags: ['metric'],
  },
  {
    term: 'Sales Cycle Length',
    definition:
      'Average time it takes for a deal to move from initial opportunity to Closed Won.',
    tags: ['metric'],
  },
  {
    term: 'Average Deal Size (ACV)',
    definition:
      'Average revenue per Closed Won deal, often measured as annual contract value for subscriptions.',
    tags: ['metric'],
  },
  {
    term: 'Pipeline Coverage',
    definition:
      'Ratio of open pipeline for a period to the quota for that same period (e.g., 3x coverage).',
    tags: ['metric'],
  },

  // CRM & data
  {
    term: 'CRM (Customer Relationship Management)',
    definition:
      'System used to track leads, contacts, accounts, opportunities, and related activities.',
    tags: ['crm', 'acronym'],
  },
  {
    term: 'Data Hygiene',
    definition:
      'Practices that keep CRM data accurate, consistent, and up to date so reports and forecasts are trustworthy.',
    tags: ['crm'],
  },
  {
    term: 'Validation Rule',
    definition:
      'CRM rule that prevents saving a record unless certain conditions are met (e.g., amount required before moving to Proposal).',
    tags: ['crm'],
  },
  {
    term: 'Closed Lost Reason',
    definition:
      'A standardized field describing why an opportunity was lost (e.g., price, timing, competitor, no decision).',
    tags: ['crm'],
  },

  // Org & targeting
  {
    term: 'ICP (Ideal Customer Profile)',
    definition:
      'Description of the type of customer that is the best fit for your product (industry, size, use case, etc.).',
    tags: ['targeting', 'acronym'],
  },
  {
    term: 'Territory',
    definition:
      'A segment of the market assigned to a rep or team, often by geography, company size, or vertical.',
    tags: ['org'],
  },
  {
    term: 'Segmentation',
    definition:
      'Dividing the market or customer base into groups (e.g., SMB, mid-market, enterprise) to tailor coverage and strategy.',
    tags: ['org'],
  },

  // Activities & enablement
  {
    term: 'Sequence / Cadence',
    definition:
      'A predefined set of outreach steps (calls, emails, touches) used to work leads in a structured way.',
    tags: ['activity'],
  },
  {
    term: 'Enablement',
    definition:
      'Training, content, and tools that help reps sell more effectively.',
    tags: ['enablement'],
  },
];

// Basic flashcard UI logic (attached to a simple area the main app can show/hide)

function initFlashcards(rootId) {
  const root = document.getElementById(rootId);
  if (!root) return;

  let currentIndex = 0;
  let showingDefinition = false;
  let correctCount = 0;
  let totalCount = 0;

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const cards = shuffle([...FLASHCARDS]);

  const cardEl = document.createElement('div');
  cardEl.className = 'flashcard';

  const termEl = document.createElement('div');
  termEl.className = 'flashcard-term';

  const definitionEl = document.createElement('div');
  definitionEl.className = 'flashcard-definition hidden';

  const controlsEl = document.createElement('div');
  controlsEl.className = 'flashcard-controls';

  const showBtn = document.createElement('button');
  showBtn.textContent = 'Show definition';
  showBtn.className = 'flashcard-btn';

  const correctBtn = document.createElement('button');
  correctBtn.textContent = 'I knew it';
  correctBtn.className = 'flashcard-btn secondary';

  const wrongBtn = document.createElement('button');
  wrongBtn.textContent = "I didn't";
  wrongBtn.className = 'flashcard-btn secondary';

  const statsEl = document.createElement('div');
  statsEl.className = 'flashcard-stats';

  controlsEl.appendChild(showBtn);
  controlsEl.appendChild(correctBtn);
  controlsEl.appendChild(wrongBtn);

  cardEl.appendChild(termEl);
  cardEl.appendChild(definitionEl);
  root.appendChild(cardEl);
  root.appendChild(controlsEl);
  root.appendChild(statsEl);

  function updateStats() {
    if (totalCount === 0) {
      statsEl.textContent = 'No answers yet.';
      return;
    }
    const pct = Math.round((correctCount / totalCount) * 100);
    statsEl.textContent = `Correct: ${correctCount}/${totalCount} (${pct}%)`;
  }

  function showCard(idx) {
    const card = cards[idx];
    if (!card) {
      termEl.textContent = 'Done! You have gone through all flashcards.';
      definitionEl.textContent = '';
      showBtn.disabled = true;
      correctBtn.disabled = true;
      wrongBtn.disabled = true;
      return;
    }
    termEl.textContent = card.term;
    definitionEl.textContent = card.definition;
    definitionEl.classList.add('hidden');
    showingDefinition = false;
    showBtn.textContent = 'Show definition';
  }

  showBtn.addEventListener('click', () => {
    if (showingDefinition) {
      definitionEl.classList.add('hidden');
      showBtn.textContent = 'Show definition';
      showingDefinition = false;
    } else {
      definitionEl.classList.remove('hidden');
      showBtn.textContent = 'Hide definition';
      showingDefinition = true;
    }
  });

  correctBtn.addEventListener('click', () => {
    totalCount += 1;
    correctCount += 1;
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
    updateStats();
  });

  wrongBtn.addEventListener('click', () => {
    totalCount += 1;
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
    updateStats();
  });

  // initial
  showCard(currentIndex);
  updateStats();
}
