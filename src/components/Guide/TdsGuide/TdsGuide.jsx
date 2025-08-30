import React from 'react';
import './TDSGuide.css';

const tdsData = [
  {
    question: "What is TDS?",
    answer: [
      "TDS (Tax Deducted at Source) is a means of collecting income tax in India, where tax is deducted at the time the income is generated or paid rather than at a later date."
    ]
  },
  {
    question: "Why is the TDS deduction done?",
    answer: [
      "To reduce tax evasion and ensure that the government receives tax in a timely manner."
    ]
  },
  {
    question: "Who is liable to deduct TDS and Who is the TDS Deductor and TDS Deductee?",
    answer: [
      "Any person or organization making specified payments such as salary, rent, professional fees, etc., is required to deduct TDS.",
      "Deductor: Person making the payment.",
      "Deductee: Person receiving the payment."
    ]
  },
  {
    question: "What type of payments are covered under the TDS scheme?",
    answer: [
      "Salary, interest, rent, commission, professional fees, contract payments, etc."
    ]
  },
  {
    question: "When TDS is to be deducted?",
    answer: [
      "TDS is deducted at the time of credit or payment, whichever is earlier."
    ]
  },
  {
    question: "What happens after TDS deduction?",
    answer: [
      "The deductor must deposit the TDS amount to the government and provide a TDS certificate to the deductee."
    ]
  },
  {
    question: "What is the due date for depositing TDS amount with the government?",
    answer: [
      "Usually by the 7th of the next month; for March, the due date is 30th April."
    ]
  },
  {
    question: "How to deposit TDS?",
    answer: [
      "Via Challan ITNS 281 through the NSDL website or authorized banks."
    ]
  },
  {
    question: "What is the Penalty for default in making TDS payment?",
    answer: [
      "Interest, late fees under Section 234E, and penalties under Section 271H."
    ]
  },
  {
    question: "When TDS is not deducted (either whole or in part)?",
    answer: [
      "If deductee furnishes a declaration under Form 15G/15H or if income is below the taxable limit."
    ]
  },
  {
    question: "When TDS is deducted but not deposited with the government?",
    answer: [
      "It is treated as a serious offense and may lead to prosecution, interest, and penalty."
    ]
  },
  {
    question: "What is a TDS certificate?",
    answer: [
      "It is proof of TDS deducted and deposited, issued by the deductor to the deductee (Form 16, 16A)."
    ]
  },
  {
    question: "What are the different types of TDS certificates?",
    answer: [
      "Form 16 (for salary), Form 16A (for other payments), Form 16B (for property), and Form 16C (for rent)."
    ]
  },
  {
    question: "What is Form 26AS?",
    answer: [
      "Form 26AS is a consolidated tax statement showing TDS, advance tax, and self-assessment tax paid by the taxpayer."
    ]
  },
  {
    question: "What to do in case of mismatch of TDS details in Form 26AS and actual TDS deducted?",
    answer: [
      "Contact the deductor to rectify the mismatch in the TDS return filed."
    ]
  },
  {
    question: "How to claim the credit of TDS?",
    answer: [
      "TDS amount is auto-filled in your ITR from Form 26AS; you can claim it while filing your income tax return."
    ]
  },
  {
    question: "How can one get exemption from TDS?",
    answer: [
      "By submitting Form 15G/15H if eligible, or by applying for a lower/nil deduction certificate under Section 197."
    ]
  }
];

const TDSGuide = () => {
  return (
    <div className="itr-guide-container">
      <h1 className="itr-guide-heading">TDS Guide</h1>
      {tdsData.map((item, index) => (
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

export default TDSGuide;
