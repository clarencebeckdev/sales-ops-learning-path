// Lightweight module definitions for the interactive learning app.
// This mirrors the content in the markdown files at a high level.

const MODULES = [
  {
    id: 'foundations-what-is-sales-ops',
    section: 'Foundations',
    title: 'What is Sales Operations?',
    tag: '01-foundations',
    content: `
<h1>What Is Sales Operations?</h1>
<p>Sales operations is the function that keeps a sales organization<strong> organized, measurable, and scalable</strong>.</p>
<p>If frontline sales is about talking to customers and closing deals, sales operations is about:</p>
<ul>
  <li>Designing the <strong>process</strong> those deals move through</li>
  <li>Owning the <strong>systems and data</strong> that support that process</li>
  <li>Building and maintaining the <strong>reports and dashboards</strong> that show whats working</li>
  <li>Helping reps and managers spend more time selling and less time fighting the tools</li>
</ul>
<p>Sales ops usually sits between sales, marketing, customer success, and (sometimes) finance/RevOps.</p>
`,
    quiz: [
      {
        q: 'In one sentence, what is sales operations trying to achieve?',
        type: 'single',
        options: [
          'Close deals directly with customers.',
          'Keep the sales org organized, measurable, and scalable.',
          'Replace sales reps with automation.',
          'Handle only marketing campaigns.',
        ],
        answer: 1,
        explanation:
          'Sales ops exists to make the sales org organized, measurable, and scalablet supports and improves selling rather than replacing reps.',
      },
    ],
  },
  {
    id: 'process-pipeline-stages',
    section: 'Process',
    title: 'Pipeline Stages',
    tag: '02-process',
    content: `
<h1>Pipeline Stages</h1>
<p>A simple B2B/SaaS pipeline might look like:</p>
<ul>
  <li><strong>New / Incoming</strong>  a new lead or opportunity has arrived.</li>
  <li><strong>Working / Contacting</strong>  rep is actively trying to connect.</li>
  <li><strong>Qualified / Discovery</strong>  real need identified, discovery in progress.</li>
  <li><strong>Proposal / Evaluation</strong>  customer is evaluating your solution and pricing.</li>
  <li><strong>Commit / Verbal</strong>  strong intent to buy, working through final approvals.</li>
  <li><strong>Closed Won / Closed Lost</strong>  deal outcome is finalized.</li>
</ul>
<p>The important part is that stages are clear, mutually exclusive, and represent real progress.</p>
`,
    quiz: [
      {
        q: 'Why is it important that pipeline stages have clear entry/exit criteria?',
        type: 'single',
        options: [
          'To make the CRM look more complicated.',
          'So reporting and forecasts reflect reality rather than hope.',
          'To force reps to spend more time on admin.',
          'So that marketing can see more leads.',
        ],
        answer: 1,
        explanation:
          'Clear stage definitions ensure that reports and forecasts are based on accurate, consistent data about where deals really are.',
      },
    ],
  },
  {
    id: 'process-lead-lifecycle',
    section: 'Process',
    title: 'Lead Lifecycle',
    tag: '02-process',
    content: `
<h1>Lead Lifecycle</h1>
<p>A common lead lifecycle is:</p>
<ul>
  <li><strong>Lead</strong>  initial interest or contact.</li>
  <li><strong>MQL (Marketing Qualified Lead)</strong>  meets marketings fit/intent criteria.</li>
  <li><strong>SAL (Sales Accepted Lead)</strong>  sales acknowledges and accepts ownership (optional).</li>
  <li><strong>SQL (Sales Qualified Lead)</strong>  sales has spoken with them and believes there is a real opportunity.</li>
  <li><strong>Opportunity</strong>  a specific potential deal with value, stage, and close date.</li>
  <li><strong>Customer</strong>  the deal is Closed Won and handed off to onboarding/CS.</li>
</ul>
`,
    quiz: [
      {
        q: 'What is the main difference between an MQL and an SQL?',
        type: 'single',
        options: [
          'MQLs are always bigger deals than SQLs.',
          'MQLs are defined by marketing signals; SQLs are qualified by a sales conversation.',
          'SQLs come only from outbound; MQLs only from inbound.',
          'There is no difference.',
        ],
        answer: 1,
        explanation:
          'MQLs are leads marketing believes are promising based on fit/behavior; SQLs are confirmed by sales as real opportunities after a conversation.',
      },
    ],
  },
  {
    id: 'metrics-core',
    section: 'Metrics',
    title: 'Core Sales Metrics',
    tag: '03-metrics',
    content: `
<h1>Core Sales Metrics</h1>
<p>Key metrics include:</p>
<ul>
  <li><strong>Lead Volume</strong>  how many leads enter the funnel.</li>
  <li><strong>Conversion Rates</strong>  how many move from one stage to the next.</li>
  <li><strong>Win Rate</strong>  % of opportunities that become Closed Won.</li>
  <li><strong>Sales Cycle Length</strong>  average time from opportunity to Closed Won.</li>
  <li><strong>Average Deal Size (ACV)</strong>  average revenue per Closed Won deal.</li>
  <li><strong>Pipeline Coverage</strong>  open pipeline vs quota for a period.</li>
</ul>
`,
    quiz: [
      {
        q: 'If you want to know where the funnel is leaking, which type of metric is most useful?',
        type: 'single',
        options: [
          'Lead volume only.',
          'Conversion rates between stages.',
          'Average deal size only.',
          'Number of emails sent by reps.',
        ],
        answer: 1,
        explanation:
          'Conversion rates between stages show where leads/opportunities drop off, which is key to spotting funnel leaks.',
      },
    ],
  },
  {
    id: 'tools-crm-concepts',
    section: 'Tools',
    title: 'CRM Concepts',
    tag: '04-tools',
    content: `
<h1>CRM Concepts</h1>
<p>Most CRMs share core objects:</p>
<ul>
  <li><strong>Leads</strong>  early interest, not yet tied to an Account.</li>
  <li><strong>Contacts</strong>  people at an Account.</li>
  <li><strong>Accounts</strong>  the companies you sell to.</li>
  <li><strong>Opportunities</strong>  potential deals with value and stage.</li>
</ul>
<p>As sales ops, you care about how these map to the real world, how fields are structured, and how views/reports make it easy for reps to work.</p>
`,
    quiz: [
      {
        q: 'What do Opportunities usually represent in a CRM?',
        type: 'single',
        options: [
          'Marketing emails.',
          'Potential deals with value, stage, and close date.',
          'Support tickets.',
          'Internal projects only.',
        ],
        answer: 1,
        explanation:
          'Opportunities (or Deals) track potential revenue: amount, stage, close date, and related contacts/accounts.',
      },
    ],
  },
  {
    id: 'communication-principles',
    section: 'Communication',
    title: 'Sales Ops Principles',
    tag: '05-communication',
    content: `
<h1>Sales Ops Principles</h1>
<ul>
  <li><strong>Data should reflect reality</strong>, not aspirations.</li>
  <li><strong>Make the right thing the easy thing</strong> for reps.</li>
  <li><strong>Start small, iterate fast</strong> on process changes.</li>
  <li><strong>Be a bridge between teams</strong> (sales, marketing, CS, finance).</li>
  <li><strong>Write things down</strong> so processes survive beyond individuals.</li>
</ul>
`,
    quiz: [
      {
        q: 'Which of these best captures a healthy sales ops mindset?',
        type: 'single',
        options: [
          'Focus only on activity counts to drive performance.',
          'Make processes strict even if reps hate them.',
          'Keep data honest and make it easier for reps to do the right thing.',
          'Change everything at once so people notice.',
        ],
        answer: 2,
        explanation:
          'Good sales ops keeps data honest and reduces friction for reps so that the right behaviors are easier, not harder.',
      },
    ],
  },
];
