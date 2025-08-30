import React from 'react';
import './GstGuide.css';

const gstFaqData = [
  {
    question: "What is GST?",
    answer: [
      "GST (Goods and Services Tax) is a comprehensive, multi-stage, destination-based indirect tax levied on the supply of goods and services in India.",
      "It has replaced various indirect taxes previously levied by the central and state governments."
    ]
  },
  {
    question: "What is the Purpose of Bringing GST in India?",
    answer: [
      "To simplify the indirect taxation structure by replacing multiple taxes with a single tax.",
      "To eliminate the cascading effect of taxes.",
      "To ensure uniformity of tax rates and structure across the country.",
      "To make Indian goods and services more competitive globally."
    ]
  },
  {
    question: "Which Indirect Taxes Have Been Replaced with the Implementation of GST?",
    answer: [
      "Central Excise Duty.",
      "Service Tax.",
      "Value Added Tax (VAT).",
      "Central Sales Tax (CST).",
      "Octroi and Entry Tax.",
      "Purchase Tax, Luxury Tax, Entertainment Tax (except levied by local bodies).",
      "Various cesses and surcharges related to supply of goods/services."
    ]
  },
  {
    question: "What is the Structure or Framework of GST in India?",
    answer: [
      "GST is structured as a dual system: Central GST (CGST) and State GST (SGST)/Union Territory GST (UTGST).",
      "For inter-state transactions, Integrated GST (IGST) is levied.",
      "CGST and SGST are levied on intra-state supplies."
    ]
  },
  {
    question: "Applicability of GST in India",
    answer: [
      "Applicable to all goods and services except alcohol for human consumption.",
      "Mandatory for businesses with turnover exceeding the threshold limit (₹40 lakh for goods, ₹20 lakh for services; lower in special category states).",
      "Applicable to all e-commerce operators and online service providers."
    ]
  },
  {
    question: "What is SGST?",
    answer: [
      "SGST (State Goods and Services Tax) is levied by the respective state government on intra-state supplies of goods and services.",
      "Revenue collected under SGST goes to the respective state government."
    ]
  },
  {
    question: "What is CGST?",
    answer: [
      "CGST (Central Goods and Services Tax) is levied by the central government on intra-state supplies of goods and services.",
      "Revenue under CGST is collected by the central government."
    ]
  },
  {
    question: "What is UTGST?",
    answer: [
      "UTGST (Union Territory Goods and Services Tax) is applicable in Union Territories without legislatures (e.g., Chandigarh, Lakshadweep).",
      "It replaces SGST in these Union Territories."
    ]
  },
  {
    question: "What is IGST?",
    answer: [
      "IGST (Integrated Goods and Services Tax) is levied by the central government on inter-state supply of goods and services.",
      "It also applies on imports and exports.",
      "Revenue is shared between the Centre and the destination state."
    ]
  },
  {
    question: "What is the Difference Between CGST, SGST, and IGST?",
    answer: [
      "CGST and SGST are levied on intra-state transactions; CGST goes to Centre, SGST to State.",
      "IGST is levied on inter-state transactions and is shared between Centre and State.",
      "Together they ensure tax revenue is properly distributed."
    ]
  },
  {
    question: "Goods and Services Not Covered Under GST",
    answer: [
      "Alcohol for human consumption.",
      "Petroleum products (like petrol, diesel, ATF, natural gas) — to be brought under GST later.",
      "Electricity.",
      "Stamp duty on property transactions (still governed by state laws)."
    ]
  },
  {
    question: "What are the GST Tax Rates in India?",
    answer: [
      "GST has multiple tax slabs: 0%, 5%, 12%, 18%, and 28%.",
      "Essential items are taxed at lower rates, while luxury and sin goods attract higher rates.",
      "Some items may also have cess in addition to GST (e.g., tobacco, luxury cars)."
    ]
  },
  {
    question: "What are the Documents Required for GST Registration?",
    answer: [
      "PAN card of the business or applicant.",
      "Aadhaar card.",
      "Proof of business registration or incorporation.",
      "Address proof of the place of business.",
      "Bank account details and canceled cheque.",
      "Photograph of the owner or authorized signatory.",
      "Digital Signature Certificate (for companies and LLPs)."
    ]
  },
  {
    question: "Will the New GST Allow Tax Cascading Benefits?",
    answer: [
      "Yes, GST eliminates the cascading effect of taxes by providing seamless input tax credit across goods and services.",
      "It ensures tax is levied only on value addition, not on total value including tax."
    ]
  },
  {
    question: "How Does Set Off Work in the Case of GST?",
    answer: [
      "Input tax credit (ITC) allows you to deduct taxes already paid on inputs from your output tax liability.",
      "Set-off hierarchy: IGST → IGST, then CGST, then SGST; CGST → CGST, then IGST; SGST → SGST, then IGST.",
      "Cross-utilization of CGST and SGST is not allowed (except via IGST)."
    ]
  }
];


const GstGuide = () => {
  return (
    <div className="itr-guide-container">
      <h1 className="itr-guide-heading">Goods and Service Tax (GST) Guide</h1>
      {gstFaqData.map((item, index) => (
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
};

export default GstGuide;
