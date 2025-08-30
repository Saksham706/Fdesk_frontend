import React from 'react'
import './GstProcedureGuide.css'

const GstProcedureGuide = () => {
    const gstFaqProcedureData = [
  {
    question: "What are GST Procedures?",
    answer: [
      "GST Procedures refer to the standardized processes prescribed under GST law for registration, invoicing, filing returns, payments, refunds, audits, assessments, and compliance checks.",
      "They ensure uniformity, transparency, and legal compliance in the tax ecosystem."
    ]
  },
  {
    question: "What is an Audit Under GST?",
    answer: [
      "An audit under GST is the examination of records, returns, and other documents to verify the correctness of turnover declared, taxes paid, refund claimed, and ITC availed.",
      "It ensures compliance with GST provisions and detects discrepancies or tax evasion."
    ]
  },
  {
    question: "Why is Audit Required?",
    answer: [
      "To ensure transparency and accuracy in the taxpayer’s accounts.",
      "To detect under-reporting or incorrect utilization of Input Tax Credit.",
      "To safeguard government revenue and identify fraudulent practices.",
      "To verify whether proper procedures have been followed under the law."
    ]
  },
  {
    question: "What are the Types of GST Audits?",
    answer: [
      "Audit by Registered Dealer (self-audit if turnover exceeds prescribed limit).",
      "Audit by Tax Authorities (under Section 65 of CGST Act).",
      "Special Audit (under Section 66, ordered by a GST officer with prior approval)."
    ]
  },
  {
    question: "What is Audit by Registered Dealer?",
    answer: [
      "Every registered person with turnover exceeding ₹5 crore in a financial year (as per older rules) had to get accounts audited and submit GSTR-9C.",
      "However, from FY 2020–21 onwards, the requirement for audit by CA/CMA has been removed and self-certification is accepted.",
      "GSTR-9 (Annual Return) and GSTR-9C (Reconciliation Statement) are to be filed accordingly."
    ]
  },
  {
    question: "What is Audit by GST Tax Authorities?",
    answer: [
      "Commissioner or any officer authorized by him may conduct a detailed audit of a registered person’s records.",
      "Prior notice is issued at least 15 days before the audit.",
      "The audit is completed within 3 months (extendable to 6 months).",
      "Findings are shared with the taxpayer, and actions are taken if discrepancies are found."
    ]
  },
  {
    question: "What is Assessment under GST?",
    answer: [
      "Assessment is the determination of tax liability under GST law.",
      "It may be done by the taxpayer (self-assessment) or by tax authorities (provisional, summary, best judgment, or protective assessment)."
    ]
  },
  {
    question: "What are the Types of Assessment under GST?",
    answer: [
      "Self-Assessment – Done by the taxpayer through GSTR-3B and GSTR-1 filing.",
      "Provisional Assessment – When the taxpayer is unsure of tax rate or value and requests the officer for assessment.",
      "Scrutiny Assessment – Officer scrutinizes the return and seeks clarification if discrepancies arise.",
      "Best Judgment Assessment – Done when the taxpayer fails to file returns or provide records.",
      "Summary Assessment – Conducted to protect revenue interests in cases of evasion or fraud."
    ]
  },
  {
    question: "What is Demand and Recovery under GST?",
    answer: [
      "Demand refers to the notice issued by authorities for short payment, non-payment, or wrongful availment of ITC.",
      "Recovery is initiated when the taxpayer fails to pay the demanded tax within the stipulated period.",
      "Modes of recovery include adjustment of refunds, attachment of property, or initiation of legal proceedings."
    ]
  },
  {
    question: "What is Advance Ruling under GST?",
    answer: [
      "Advance Ruling is a written decision by the Authority for Advance Ruling (AAR) on specific questions related to GST applicability, tax rate, classification, etc.",
      "It helps taxpayers seek clarity in advance and avoid litigation.",
      "Binding on the applicant and tax authorities unless appealed before Appellate AAR."
    ]
  }
];

return (
    <div className="itr-guide-container">
      <h1 className="itr-guide-heading">GSt Procedure Guide</h1>
      {gstFaqProcedureData.map((item, index) => (
        <div key={index} className="itr-guide-box">
          <h3 className="itr-question">{item.question}</h3>
          <ul className="itr-answer">
            {item.answer.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GstProcedureGuide
