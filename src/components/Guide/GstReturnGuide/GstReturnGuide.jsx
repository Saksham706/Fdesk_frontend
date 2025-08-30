import React from 'react'
import './GstReturnGuide.css'
const GstReturnGuide = () => {
    const gstFaqReturnsData = [
  {
    question: "What are GST Returns?",
    answer: [
      "GST Returns are official documents that every registered GST taxpayer must file with the tax authorities.",
      "They contain details of sales, purchases, output tax (GST collected on sales), and input tax credit (GST paid on purchases).",
      "Returns are filed monthly, quarterly, or annually depending on the taxpayer’s category."
    ]
  },
  {
    question: "Why is Filing of GST Returns Important?",
    answer: [
      "Ensures legal compliance under GST laws.",
      "Allows the taxpayer to claim input tax credit (ITC).",
      "Provides transparency in business transactions.",
      "Enables tax authorities to match data and detect tax evasion.",
      "Prevents penalties and legal actions from the GST department."
    ]
  },
  {
    question: "Who Should File GST Returns?",
    answer: [
      "All registered businesses under GST, including:",
      "• Regular taxpayers (monthly/quarterly returns).",
      "• Composition scheme taxpayers (quarterly + annual returns).",
      "• E-commerce operators and non-resident taxable persons.",
      "• Input Service Distributors (ISD), TDS and TCS deductors.",
      "Even if there are no transactions, NIL returns must be filed."
    ]
  },
  {
    question: "What are the Various Types of GST Returns and Who is Required to File Them?",
    answer: [
      "GSTR-1: Monthly/Quarterly return for outward supplies (sales) – by all regular taxpayers.",
      "GSTR-3B: Monthly summary return of sales, purchases, tax liability, and ITC – by regular taxpayers.",
      "GSTR-4: Annual return for composition scheme taxpayers.",
      "GSTR-5: Return for non-resident taxable persons.",
      "GSTR-6: Return for Input Service Distributors (ISD).",
      "GSTR-7: Return for TDS deductors.",
      "GSTR-8: Return for e-commerce operators collecting TCS.",
      "GSTR-9: Annual return for regular taxpayers.",
      "GSTR-9C: Reconciliation statement (if applicable).",
      "GSTR-10: Final return after cancellation of GST registration.",
      "GSTR-11: Return for persons with a Unique Identification Number (UIN)."
    ]
  },
  {
    question: "What Happens in Case of Late Filing of GST Returns?",
    answer: [
      "Late filing attracts monetary penalties and interest.",
      "Delays in filing GSTR-1 or GSTR-3B affect the recipient’s ITC claims.",
      "Continued non-compliance can lead to suspension or cancellation of registration.",
      "Late fees get auto-populated in the next return and must be paid before filing."
    ]
  },
  {
    question: "What are the Interest and Late Fees for Delayed Filing?",
    answer: [
      "Interest is charged at 18% per annum on the outstanding tax amount from the due date to the payment date.",
      "Late fees for GSTR-3B and GSTR-1: ₹50/day (₹25 CGST + ₹25 SGST), capped at ₹5,000.",
      "NIL returns: ₹20/day (₹10 CGST + ₹10 SGST), capped at ₹500.",
      "Late fees must be paid before filing the return."
    ]
  }
];

  return (
    <div className="itr-guide-container">
      <h1 className="itr-guide-heading">GST Return Guide</h1>
      {gstFaqReturnsData.map((item, index) => (
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

export default GstReturnGuide
