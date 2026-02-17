# CRM Concepts (Sales Ops View)

You don’t need to be a full-time admin to be effective in sales ops, but you **do** need to understand how CRM concepts map to the real world.

This doc uses generic terms that apply to most CRMs (Salesforce, HubSpot, etc.).

---

## Core Objects

### 1. Leads

**What they usually represent:**
- People (and sometimes companies) who are not yet fully qualified or associated with an Account.

**Used for:**
- Capturing new interest from forms, lists, outbound, events, etc.
- Early-stage qualification before creating Opportunities.

### 2. Contacts

**What they represent:**
- People at a specific company (Account) with ongoing relationships.

**Used for:**
- Storing persistent information about individuals: role, email, phone, relationship notes.

### 3. Accounts (or Companies)

**What they represent:**
- The organization you’re selling to.

**Used for:**
- Tracking company-level info: size, industry, region, current products, history.

### 4. Opportunities (or Deals)

**What they represent:**
- A potential sale with value and a defined process from open → closed.

**Used for:**
- Managing the sales pipeline and forecasting revenue.

---

## Fields & Data Types

As sales ops, fields are your building blocks.

Common field types:

- **Text** – names, notes, free-form info
- **Picklists / dropdowns** – stages, industries, lead sources
- **Checkboxes** – yes/no flags (e.g., "Opted into marketing emails")
- **Numbers / currency** – amounts, counts, percentages
- **Dates** – close dates, last contacted dates, renewal dates

Key ideas:

- Keep picklists **small and meaningful**—too many options leads to bad data.
- Prefer structured fields (picklists, checkboxes) over free text when you need reporting.

---

## Views, Filters, and Reports

### Views / Lists

- Saved filters on objects (Leads, Opportunities, etc.).
- Examples:
  - "My open opportunities this quarter"
  - "Leads assigned to me this week"

Good sales ops makes sure reps have **simple, relevant views** they can use every day.

### Reports

- More flexible, often cross-object (e.g., opportunities + accounts + activities).
- Used for:
  - Manager pipeline reviews
  - Performance tracking
  - Quarterly summaries

### Dashboards

- Collections of charts/tables pulled from reports.
- Used for:
  - Leadership and exec views
  - Team overview pages

---

## Validation & Required Fields

To keep data usable:

- Some fields should be **required** when creating or updating records.
- Validation rules can enforce business logic (e.g., cannot move to "Proposal" stage without an amount).

Examples of good validation:

- Opportunity cannot be Closed Won without:
  - Amount
  - Close date
  - Primary contact
- Stage cannot move beyond "Qualified" without:
  - A next step
  - A basic qualification note

As sales ops, you balance:

- Enough rules to keep data trustworthy
- Not so many rules that reps feel blocked and work around the system

---

## Automations (At a High Level)

Common automation patterns:

- **Lead assignment** – route new leads based on territory, segment, or round-robin.
- **Task creation** – automatically create follow-up tasks when certain events happen (e.g., new MQL, no activity for X days).
- **Field updates** – set or clear fields based on actions (e.g., set "Contacted" flag after first logged call).

You don’t need to build every automation yourself, but you should be able to:

- Describe the workflow
- Work with admins or tools to implement it
- Validate that it works (and doesn’t create chaos)

---

## How to Talk About CRM Skills

In an interview or portfolio context, focus on:

- How you think about structuring objects and fields to reflect the real world
- How you’d use validation and required fields to protect data quality
- How you’d design simple, helpful views and reports for reps and managers

You can be honest about not being a deep admin yet while still showing strong **systems thinking** and a practical grasp of CRM concepts.
