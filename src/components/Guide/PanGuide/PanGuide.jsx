import React from 'react';
import './PanGuide.css';

const panFaqs = [
  {
    question: "What is a PAN Card?",
    answer: [
      "PAN (Permanent Account Number) is a unique 10-character alphanumeric identifier issued by the Income Tax Department of India.",
      "It helps link all financial transactions to an individual or entity for tax purposes.",
    ],
  },
  {
    question: "What is the significance of each character in your PAN card?",
    answer: [
      "First three characters: Random letters.",
      "Fourth character: Type of holder (e.g., 'P' for Individual, 'C' for Company).",
      "Fifth character: First letter of the holder’s surname.",
      "Next four: Sequential numbers.",
      "Last: An alphabetic check digit.",
    ],
  },
  {
    question: "Who is eligible to apply for a PAN card?",
    answer: [
      "Indian citizens (individuals and entities).",
      "Foreign nationals involved in business or investment in India.",
      "Minors (via parents/guardians).",
    ],
  },
  {
    question: "What is the importance of a PAN Card?",
    answer: [
      "Mandatory for filing income tax returns.",
      "Required for high-value financial transactions.",
      "Serves as a valid identity proof.",
    ],
  },
  {
    question: "What is the importance of a PAN Card for a non-resident individual?",
    answer: [
      "Required for investing in India (stocks, mutual funds, real estate).",
      "Needed to open NRO/NRE accounts in Indian banks.",
      "Essential for income tax compliance in India.",
    ],
  },
  {
    question: "Documents for PAN",
    answer: [
      "Identity Proof: Aadhaar, Voter ID, Passport, etc.",
      "Address Proof: Utility bill, Aadhaar, Bank statement, etc.",
      "DOB Proof (for individuals): Birth certificate, Passport, etc.",
    ],
  },
  {
    question: "How to apply for a PAN?",
    answer: [
      "Online through NSDL or UTIITSL websites.",
      "Submit Form 49A (for residents) or 49AA (for NRIs/foreigners).",
      "Upload required documents and pay the fee.",
      "Track application via acknowledgment number.",
    ],
  },
  {
    question: "Types of PAN Card form",
    answer: [
      "Form 49A: For Indian citizens and entities.",
      "Form 49AA: For foreign citizens/entities.",
    ],
  },
  {
    question: "How to Update/Edit PAN Details?",
    answer: [
      "Visit the NSDL/UTIITSL portal.",
      "Select the ‘Change/Correction’ form.",
      "Submit valid documents for correction.",
      "Pay applicable fee and track status online.",
    ],
  },
  {
    question: "What happens in case of any contravention relating to PAN?",
    answer: [
      "Non-compliance may attract a penalty of ₹10,000 under Section 272B of the Income Tax Act.",
      "Using multiple PANs is a punishable offense.",
    ],
  },
];

const PanGuide = () => {
    return (
    <div className="itr-guide-container">
      <h1 className="itr-guide-heading">Pan Card Guide</h1>
      {panFaqs.map((item, index) => (
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

export default PanGuide;
