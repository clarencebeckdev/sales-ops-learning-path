# Pipeline Hygiene Checklist

Pipeline hygiene is about keeping your CRM clean enough that reports, forecasts, and 1:1s reflect reality—not wishful thinking.

This checklist describes what “good hygiene” looks like at a basic level. In sales ops, you’d turn this into:

- Required fields in the CRM
- Saved views/filters for reps and managers
- A quick weekly review routine

---

## 1. Opportunity Basics

For **every open opportunity**, the following should be true:

- [ ] **Owner** is correct (the rep who is actually responsible)
- [ ] **Account / Company** is correct and de-duplicated
- [ ] **Primary contact** is set and has:
  - Name
  - Email
  - Phone (if applicable)
- [ ] **Amount** (expected deal value) is filled in and realistic
- [ ] **Close date** is filled in and not obviously stale (e.g., not last quarter)

---

## 2. Stage Accuracy

Stage should reflect the **true state** of the deal, not where we wish it were.

For each opportunity:

- [ ] Stage matches the definitions from `pipeline-stages.md`
- [ ] If the stage moved forward recently, there is a note or activity that explains why
- [ ] No opportunities are sitting in late stages (e.g., Proposal/Commit) with:
  - No recent activity
  - No clear next step

Red flags:

- Lots of deals sitting in the same stage for months
- Deals in "Commit" with no scheduled follow-up or outstanding approvals

---

## 3. Activities & Next Steps

Good hygiene means any manager can open an opportunity and understand **what’s happening next**.

For each open opportunity:

- [ ] There is at least one **upcoming task or event** (call, demo, follow-up, etc.)
- [ ] Last activity date is recent relative to the stage and typical cycle length
- [ ] Next steps are clearly documented in notes or tasks

Examples of good next-step notes:

- "Send revised proposal with updated seat count on Friday; follow-up call Monday 2pm."
- "Waiting on security review from IT; check-in with champion on Wednesday."

---

## 4. Close Dates

Close dates are one of the most abused fields in CRMs.

For each open opportunity:

- [ ] Close date reflects a **realistic target**, tied to the decision process
- [ ] Close dates are not being pushed forward over and over without explanation
- [ ] Opportunities that are clearly not closing this period have close dates updated (or are moved to Closed Lost)

As sales ops, you might:

- Build a report for "opportunities with close dates in the past"
- Review this with reps weekly and clean them up

---

## 5. Closed Won / Closed Lost

Closed Won:

- [ ] Amount matches what was actually sold
- [ ] Products/plan/term fields are accurate
- [ ] Close date reflects when the deal actually closed
- [ ] Handoff notes to onboarding/CS are filled in

Closed Lost:

- [ ] A **Closed Lost reason** is selected (not just "Other")
- [ ] A short note explains what happened (pricing, timing, competitor, no decision, etc.)

Closed Lost reason data is valuable later for:

- Product feedback
- Pricing discussions
- Marketing targeting

---

## 6. Duplicates & Data Quality

Over time, CRMs tend to accumulate duplicates and outdated records.

Basic hygiene practices:

- [ ] Regularly merge duplicate Accounts/Contacts/Leads
- [ ] Use standard naming conventions for Accounts (no "Inc", "Inc.", "Incorporated" variants if possible)
- [ ] Keep key fields (industry, size, region, etc.) consistent where required

As sales ops, you might:

- Schedule a monthly "data cleanup" block
- Use simple reports to find likely duplicates (same name, same email domain)

---

## 7. Weekly Hygiene Routine (for Reps)

A simple weekly routine you can recommend to reps:

**Every Friday (or last working day of the week):**

1. **Review open opps**
   - Move obviously dead deals to Closed Lost
   - Adjust stages to reflect reality

2. **Update close dates**
   - Fix anything clearly wrong or in the past

3. **Add next steps**
   - Make sure every active opportunity has a next action scheduled

4. **Check your views**
   - Use a saved view for "My open opportunities" sorted by close date and stage

In sales ops, your role is to make this easy:

- Provide the right views/filters
- Automate reminders where possible
- Keep the rules simple and clearly documented
