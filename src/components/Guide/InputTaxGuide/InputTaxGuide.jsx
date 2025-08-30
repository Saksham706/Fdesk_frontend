import React from 'react'
import './InputTaxGuide.css'
const InputTaxGuide = () => {

    const gstFaqITCData = [
  {
    question: "What is Input Tax Credit?",
    answer: [
      "Input Tax Credit (ITC) refers to the credit that a taxpayer can claim for the GST paid on purchases (inputs) used to provide taxable goods or services.",
      "It helps eliminate the cascading effect of taxes by allowing the deduction of GST paid on inputs from GST payable on outputs."
    ]
  },
  {
    question: "Conditions for Claiming ITC",
    answer: [
      "You must be a registered taxpayer under GST.",
      "You must have received the goods or services.",
      "You must possess a valid tax invoice or debit note.",
      "The supplier must have filed the GST return and paid the tax.",
      "Goods or services must be used for business purposes.",
      "You must file your return (GSTR-3B) and match it with GSTR-2B."
    ]
  },
  {
    question: "What Can Be Claimed as ITC?",
    answer: [
      "GST paid on purchases of raw materials, capital goods, and input services used in the course of business.",
      "GST paid on business-related expenses such as rent, professional services, maintenance, etc.",
      "GST paid on imports and reverse charge transactions (if applicable)."
    ]
  },
  {
    question: "What Cannot Be Claimed as Input Tax Credit?",
    answer: [
      "GST paid on personal consumption goods/services.",
      "Motor vehicles (except for transport, training, or resale purposes).",
      "Goods or services used for construction of immovable property (except plant and machinery).",
      "Membership of clubs, health & fitness centers, life/health insurance (unless required by law).",
      "Free samples, gifts, and goods lost, stolen, or written off.",
      "Travel benefits to employees on vacation such as Leave or Home Travel Concession."
    ]
  },
  {
    question: "Time Limit to Claim Input Tax Credit Under GST",
    answer: [
      "ITC must be claimed by the earlier of the following:",
      "• Due date of filing GSTR-3B for September of the following financial year.",
      "• Date of filing the annual return (GSTR-9).",
      "After this period, ITC cannot be claimed even if eligible."
    ]
  },
  {
    question: "Documents Required for Claiming ITC",
    answer: [
      "Valid tax invoice or debit note issued by the supplier.",
      "Goods Receipt Note (in case of goods).",
      "Payment proof to the supplier (especially under reverse charge).",
      "Invoice must be reflected in GSTR-2B or reconciled with 26AS/AIS data.",
      "Bill of Entry (for imports)."
    ]
  },
  {
    question: "Special Cases of Input Tax Credit (ITC)",
    answer: [
      "ITC on capital goods is allowed if used for business.",
      "ITC can be availed on stock held during migration to GST (transitional credit).",
      "Credit is allowed on advance payments under reverse charge.",
      "ITC is ineligible if depreciation is claimed on the tax portion of capital goods."
    ]
  },
  {
    question: "Utilization of Input Tax Credits",
    answer: [
      "IGST credit → First set off IGST, then CGST, then SGST/UTGST.",
      "CGST credit → Set off against CGST and then IGST (not SGST).",
      "SGST credit → Set off against SGST and then IGST (not CGST).",
      "Cross-utilization between CGST and SGST is not allowed."
    ]
  },
  {
    question: "ITC Treatment in Case of Input Goods and Services",
    answer: [
      "ITC is allowed only on inputs used for making taxable supplies.",
      "Partial ITC allowed if inputs are used for both taxable and exempt supplies (proportionate calculation needed).",
      "No ITC on inputs used for personal consumption or for exempt supplies."
    ]
  },
  {
    question: "How to Claim Input Tax Credit?",
    answer: [
      "Step 1: Ensure supplier has uploaded the invoice in GSTR-1 and filed their return.",
      "Step 2: Check your GSTR-2B for eligible ITC.",
      "Step 3: Match invoices with books and GSTR-2B.",
      "Step 4: Claim ITC while filing GSTR-3B in eligible fields.",
      "Step 5: Maintain proper records and reconcile regularly."
    ]
  }
];

  return (
    <div className="itr-guide-container">
      <h1 className="itr-guide-heading">Income Tax Guide (ITG) Guide</h1>
      {gstFaqITCData.map((item, index) => (
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

export default InputTaxGuide
