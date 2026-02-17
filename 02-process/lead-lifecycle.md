# Lead Lifecycle (From Lead to Customer)

The **lead lifecycle** describes how a person or company moves from first showing up in your world (a lead) to becoming a customer.

While naming conventions vary by company, a common structure looks like:

- Lead → Marketing Qualified Lead (**MQL**) → Sales Qualified Lead (**SQL**) → Opportunity → Customer

This doc lays out the typical steps and what they mean.

---

## 1. Lead

**What it is:**
- Anyone who has shown some level of interest or who you’ve identified as a potential customer.

Examples:
- Filled out a form on your website
- Called in from an ad or directory listing
- Imported from a list or trade show
- Prospected by a rep (cold outbound)

**Key data to capture:**
- Contact info (name, email, phone)
- Company info (if B2B): name, size, industry
- Source (how they found you)

At this point, the lead has not yet been qualified by marketing or sales.

---

## 2. Marketing Qualified Lead (MQL)

**What it is:**
- A lead that meets a minimum threshold defined by marketing, based on behavior and/or fit.

Common MQL criteria:
- Fit: correct region, company size, industry, role, etc.
- Behavior: downloaded multiple resources, attended a webinar, requested a demo, etc.

**Who defines it:**
- Usually marketing, in alignment with sales.

**Why it matters:**
- Helps avoid sending every low-intent contact to sales.
- Gives sales a more focused set of leads to work.

Once a lead becomes an MQL, it typically gets passed to sales (SDR/BDR or AE), either automatically or via queues/assignments.

---

## 3. Sales Accepted Lead (SAL) *(optional but useful)*

Some teams use an intermediate step: **Sales Accepted Lead (SAL)**.

**What it is:**
- An MQL that sales has reviewed and accepted into their queue.

Why it’s helpful:
- Makes it explicit when sales has taken ownership of the lead.
- Allows you to track whether sales is actually following up with marketing’s leads (MQL → SAL rate).

If you don’t want another status, you can treat this as an internal concept: a rep moving a lead into a “Working” or “Contacting” status means it’s effectively accepted.

---

## 4. Sales Qualified Lead (SQL)

**What it is:**
- A lead that sales has spoken with and determined is a real opportunity worth pursuing.

This typically means:
- You’ve had at least one meaningful conversation (not just a voicemail or unopened email).
- Basic qualification is met:
  - There’s a real **pain/need**
  - They have some level of **budget** or willingness to invest
  - You understand **who** is involved in the decision
  - There’s a realistic **timeframe**

(BANT/MEDDIC/etc. live here—SQL is the outcome of running those frameworks in a lightweight way.)

**What usually happens at SQL:**
- You create or convert to an **Opportunity** in the CRM.
- The contact “graduates” from being just a lead record to being tied to an active deal.

---

## 5. Opportunity

Once a lead is qualified and turned into an opportunity:

**What it is:**
- A specific potential deal with a value, expected close date, and defined stage in your pipeline.

Opportunities track:
- Deal value (amount)
- Stage (New, Qualified, Proposal, etc.)
- Close date
- Products/plan being considered
- Stakeholders and notes

From here, the opportunity moves through the **pipeline stages** (see `pipeline-stages.md`) until it becomes **Closed Won** (customer) or **Closed Lost**.

---

## 6. Customer

**What it is:**
- A lead/opportunity that has resulted in a sale.

Key handoff items at this point:
- Make sure the **opportunity** is correctly set to Closed Won with accurate details (amount, start date, products, term).
- Ensure a clean handoff to onboarding / customer success:
  - Notes about expectations
  - Any special terms
  - Context from discovery and evaluation

---

## Why This Matters for Sales Ops

As someone in (or moving into) sales operations, the lead lifecycle matters because it underpins:

- **Reporting**:
  - How many leads become MQLs?
  - How many MQLs become SQLs?
  - How many SQLs become opportunities and then deals?
- **Accountability**:
  - Are marketing and sales aligned on what an MQL/SQL is?
  - Are reps following up with MQLs promptly?
- **Process design**:
  - When do we create opportunities?
  - When do we hand off from marketing → SDR → AE?

A clean, well-documented lifecycle makes it easier to:

- Spot breakdowns (e.g., lots of MQLs, but very few SQLs)
- Have constructive conversations between marketing and sales
- Improve conversion rates at specific stages instead of just “needing more leads”
