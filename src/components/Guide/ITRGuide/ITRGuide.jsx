import React from 'react';
import './ITRGuide.css';

const itrFaqData = [
  {
    question: "What is an Income Tax Return (ITR)?",
    answer: [
      "An Income Tax Return (ITR) is a form used to report an individual’s or entity’s income and tax payments to the Income Tax Department.",
      "It includes details like total income earned, deductions claimed, and tax liability or refund.",
      "Filing ITR is mandatory if your income exceeds the basic exemption limit or if certain conditions are met."
    ]
  },
  {
    question: "What are the Benefits of Filing an Income Tax Return?",
    answer: [
      "Avoid penalties and comply with legal obligations.",
      "Get refund of excess TDS or advance tax paid.",
      "Helps in applying for loans and visas.",
      "Acts as valid income proof and financial record.",
      "Carry forward capital losses to future years.",
      "Required for high-value transactions (e.g., property purchase)."
    ]
  },
  {
    question: "What is the Due Date to File an Income Tax Return?",
    answer: [
      "For individuals (non-audit cases): 31st July 2025 (for FY 2024–25 / AY 2025–26).",
      "For companies and audited cases: 31st October 2025.",
      "For transfer pricing cases: 30th November 2025.",
      "Belated returns can be filed till 31st December 2025 with a late fee."
    ]
  },
  {
    question: "Who Should File an Income Tax Return?",
    answer: [
      "Individuals with gross total income above ₹2.5 lakh (₹3 lakh for senior citizens).",
      "If you have foreign income or assets.",
      "If TDS has been deducted and you want a refund.",
      "If you want to carry forward capital or business losses.",
      "If you deposit over ₹1 crore in a bank account.",
      "If total electricity bill exceeds ₹1 lakh or foreign travel expense > ₹2 lakh."
    ]
  },
  {
    question: "What Documents are Required to File ITR?",
    answer: [
      "PAN Card and Aadhaar Card.",
      "Form 16 from employer.",
      "Form 26AS and AIS (Annual Information Statement).",
      "Bank account details and interest certificates.",
      "Investment proofs (80C, 80D, donations, etc.).",
      "Capital gain statements, rent receipts (for HRA), and home loan interest certificate.",
      "Business income books (if applicable)."
    ]
  },
  {
    question: "How to File ITR for FY 2024-25 (AY 2025-26)?",
    answer: [
      "Step 1: Log in to the income tax portal (https://incometax.gov.in).",
      "Step 2: Go to 'e-File' > 'Income Tax Return'.",
      "Step 3: Select AY 2025–26, ITR Form (e.g., ITR-1, ITR-2) and filing type.",
      "Step 4: Fill in income details, deductions, and taxes paid.",
      "Step 5: Preview and validate the return.",
      "Step 6: Submit and verify using Aadhaar OTP, net banking, or DSC.",
      "Step 7: Save the acknowledgment (ITR-V)."
    ]
  },
  {
    question: "How to File ITR with FdeskSolutions?",
    answer: [
      "Visit www.FdeskSolutions.in.",
      "Click on 'File ITR Now'.",
      "Choose Assisted Filing (via CA) or DIY (Do-It-Yourself).",
      "Login/register and fill personal & income details.",
      "Upload Form 16 and other documents.",
      "Pay service charges (for Assisted Filing).",
      "Get your ITR filed and receive acknowledgment (ITR-V)."
    ]
  },
  {
    question: "What Will be the Next Steps After e-filing of Income Tax Returns?",
    answer: [
      "Verify your return electronically via Aadhaar OTP, net banking, or send ITR-V by post.",
      "Track status under ‘My Account’ > ‘View Returns/Forms’.",
      "Refund (if any) will be processed to the bank account mentioned.",
      "If return is defective or needs correction, a notice will be issued under section 139(9) or 143(1).",
      "Always respond to notices promptly."
    ]
  },
  {
    question: "How to e-file ITR with Form 16?",
    answer: [
      "Obtain Form 16 from your employer.",
      "Log in to the income tax portal.",
      "Select the correct ITR form (usually ITR-1 for salaried individuals).",
      "Fill Part A (salary breakup) and Part B (deductions, TDS).",
      "Match details with Form 26AS and AIS.",
      "Complete remaining sections (bank, taxes, exemptions).",
      "Submit and e-verify."
    ]
  },
  {
    question: "What will happen when I have taxable income but do not File my Income Tax Return?",
    answer: [
      "Late filing fee under Section 234F (up to ₹5,000).",
      "Interest penalty under Sections 234A/B/C.",
      "Unable to carry forward capital/business losses.",
      "No access to refund of TDS or excess tax paid.",
      "Prosecution and penalty under Section 276CC for willful default.",
      "IT Department may send notice and initiate scrutiny."
    ]
  },
  {
    question: "5 Important Changes to Keep in Mind While Filing ITR for FY 2024-25 (AY 2025-26)",
    answer: [
      "1. New Tax Regime as default: Choose old regime explicitly if preferred.",
      "2. Updated Form 26AS and AIS: Cross-check all reported transactions.",
      "3. Higher TDS on cash withdrawals and crypto trades.",
      "4. Revised exemption rules for ULIPs and life insurance over ₹5 lakh premium.",
      "5. Mandatory linking of PAN with Aadhaar for return processing."
    ]
  }
];

const ITRGuide = () => {
  return (
    <div className="itr-guide-container">
      <h1 className="itr-guide-heading">Income Tax Return (ITR) Guide</h1>
      {itrFaqData.map((item, index) => (
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

export default ITRGuide;
