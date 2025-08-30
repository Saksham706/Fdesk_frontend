import React from 'react'
import './IncomeTaxRefundGuide.css'

const IncomeTaxRefundGuide = () => {
const incomeTaxRefundData = [
  {
    question: "What is Income Tax Refund?",
    answer: [
      "It is the excess tax paid by a taxpayer over and above the actual tax liability.",
      "Refunds usually occur when TDS/TCS or advance tax paid exceeds the actual payable tax.",
      "The Income Tax Department processes the refund after verifying the return filed."
    ]
  },
  {
    question: "How to claim an Income Tax Refund?",
    answer: [
      "1. File your Income Tax Return (ITR) correctly for the financial year.",
      "2. Ensure bank account and PAN are linked and validated.",
      "3. Claim the refund in your ITR by entering the excess tax details.",
      "4. E-verify your return using Aadhaar OTP, Net Banking, EVC, etc.",
      "5. Wait for the Income Tax Department to process and approve your refund."
    ]
  },
  {
    question: "What is the meaning of the status of my refund?",
    answer: [
      "• **Refund Paid** – Refund has been credited to your bank account.",
      "• **Refund Failed** – Bank account issue; reissue needed.",
      "• **Refund Expired** – Time limit to claim refund expired; file reissue request.",
      "• **Refund Not Determined** – ITR is still being processed.",
      "• **Refund Status Not Available** – Likely return not filed or not processed yet."
    ]
  },
  {
    question: "Simple steps to apply for Refund Reissue:",
    answer: [
      "1. Log in to the [Income Tax e-filing portal](https://www.incometax.gov.in/).",
      "2. Go to 'Services' > 'Refund Reissue'.",
      "3. Select the relevant PAN and Assessment Year.",
      "4. Provide correct bank account details (must be pre-validated).",
      "5. Submit the request and wait for refund reprocessing."
    ]
  },
  {
    question: "What are the reasons for the Income Tax Refund delay?",
    answer: [
      "• ITR not e-verified or delayed e-verification.",
      "• Mismatch in bank details or PAN not linked to bank.",
      "• Scrutiny or verification initiated by the IT Department.",
      "• Errors or mismatch in ITR data.",
      "• Delay in processing due to high volume or system backlog."
    ]
  },
  {
    question: "Will I also get any interest for the delayed refund?",
    answer: [
      "Yes, under Section 244A of the Income Tax Act:",
      "• Interest is payable if refund is delayed beyond 3 months from the end of the financial year.",
      "• Interest @ 0.5% per month (6% annually) is paid on the refund amount.",
      "• Interest is taxable and must be reported in the next year's ITR."
    ]
  },
  {
    question: "What are the different ways in which refund is issued by the Department?",
    answer: [
      "1. **Direct Bank Transfer** – Refund is credited to your pre-validated bank account via ECS/NEFT.",
      "2. **Cheque Mode** – Rare, but cheque may be sent to your registered address.",
      "Note: Ensure your bank account is valid and linked to PAN to avoid failures."
    ]
  }
];

   return (
    <div className="itr-guide-container">
      <h1 className="itr-guide-heading">Income Tax Refund Guide Guide</h1>
      {incomeTaxRefundData.map((item, index) => (
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

export default IncomeTaxRefundGuide
