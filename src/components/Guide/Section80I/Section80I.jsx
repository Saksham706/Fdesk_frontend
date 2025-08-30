import React from 'react';
import './Section80I.css';

const faqs = [
  {
    question: "Understanding Income Tax Deductions Under Chapter VI-A",
    answer: [
      "Chapter VI-A of the Income Tax Act allows taxpayers to claim deductions from gross total income.",
      "These deductions help reduce taxable income and include sections such as 80C, 80D, 80G, etc.",
      "It is applicable to individuals, HUFs, and some deductions apply to companies/firms."
    ]
  },
  {
    question: "Section 80 Deduction List - Deduction Limits Under Section 80C, 80CCC, 80CCD(1), 80CCE, 80CCD(1B)",
    answer: [
      "Section 80C: Up to ₹1.5 lakh for investments in PPF, ELSS, LIC premium, etc.",
      "Section 80CCC: Up to ₹1.5 lakh for contributions to pension funds (covered in 80CCE limit).",
      "Section 80CCD(1): Up to ₹1.5 lakh for NPS contributions (included in 80CCE).",
      "Section 80CCE: Cumulative limit of ₹1.5 lakh for 80C, 80CCC & 80CCD(1).",
      "Section 80CCD(1B): Additional ₹50,000 for NPS (over and above 80CCE)."
    ]
  },
  {
    question: "Best Investment Options for Tax Savings Under Section 80C",
    answer: [
      "Public Provident Fund (PPF)",
      "Equity-Linked Saving Schemes (ELSS)",
      "5-Year Fixed Deposit",
      "National Savings Certificate (NSC)",
      "Employee Provident Fund (EPF)",
      "Life Insurance Premiums",
      "Tuition fees for children (max 2)"
    ]
  },
  {
    question: "Old vs New Tax Regime: Which Deductions Are Allowed?",
    answer: [
      "Old Regime: Most deductions under Chapter VI-A allowed (80C, 80D, etc.).",
      "New Regime: Most deductions and exemptions are not allowed.",
      "Only limited deductions like 80CCD(2) (employer NPS contribution) and 80JJAA are available."
    ]
  },
  {
    question: "Features of Income Tax Deduction u/s 80",
    answer: [
      "Encourages savings and investments through tax incentives.",
      "Covers a wide range of deductions: health insurance, education loan, donations, etc.",
      "Helps reduce tax liability legally.",
      "Applicable to resident individuals, HUFs, and some NRIs."
    ]
  }
];

const Section80I = () => {
    return (
    <div className="itr-guide-container">
      <h1 className="itr-guide-heading">Section 80 Deduction Guide</h1>
      {faqs.map((item, index) => (
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

export default Section80I;
