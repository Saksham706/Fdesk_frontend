import React from 'react';
import './ITRVerificationGuide.css';

const ITRVerificationGuide = () => {
  const questions = [
    {
      question: "What is ITR Verification?",
      answer: [
        "ITR Verification is the process of confirming the validity of your filed Income Tax Return.",
        "The ITR is not treated as complete until it is verified.",
        "Verification must be done within 30 days of filing the return, either electronically or manually."
      ]
    },
    {
      question: "Ways to E-verify your Tax Return",
      answer: [
        "Using Aadhaar OTP",
        "Through Net Banking",
        "Using Bank Account details",
        "Through Demat Account details",
        "Using Electronic Verification Code (EVC)",
        "Using Digital Signature Certificate (DSC)"
      ]
    },
    {
      question: "E-Verify ITR through FdeskSolutions",
      answer: [
        "Login to FdeskSolutions platform.",
        "Select the 'e-Verify' option after filing ITR.",
        "Choose a verification method like Aadhaar OTP or Net Banking.",
        "Follow the on-screen instructions to complete verification."
      ]
    },
    {
      question: "How to ‘e-verify’ the ITR without logging into the e-filing portal?",
      answer: [
        "Visit: https://www.incometax.gov.in/iec/foportal/",
        "Click on 'e-Verify Return (without login)' under 'Quick Links'.",
        "Enter your PAN, Assessment Year, and Acknowledgment Number.",
        "Choose a mode (Aadhaar OTP, Net Banking, etc.) to verify."
      ]
    },
    {
      question: "Steps for e-Verifying the return without login to e-Filing portal (with images)",
      answer: [
        "Go to the income tax portal homepage.",
        "Click ‘e-Verify Return’ in Quick Links.",
        "Enter required credentials like PAN, AY, and Ack No.",
        "Select the e-verification method.",
        "Follow the prompts and submit the OTP/EVC."
      ]
    },
    {
      question: "How to E-verify ITR after Login to the Income Tax Portal?",
      answer: [
        "Login using your PAN and password.",
        "Go to 'e-File' → 'Income Tax Returns' → 'e-Verify Return'.",
        "Select the return to be verified.",
        "Choose a verification mode and proceed."
      ]
    },
    {
      question: "Process 1: E-Verify Return using Aadhaar OTP",
      answer: [
        "Link your PAN with Aadhaar and ensure your mobile number is registered with UIDAI.",
        "Choose 'Aadhaar OTP' as e-verification method.",
        "Enter the OTP received on your Aadhaar-linked mobile number.",
        "Submit and receive confirmation."
      ]
    },
    {
      question: "Process 2: E-Verify Return using Digital Signature Certificate (DSC)",
      answer: [
        "Ensure your DSC is registered on the portal.",
        "Attach the USB token or dongle to your system.",
        "Select 'Verify using DSC' and upload the signature file.",
        "Authenticate and verify the return."
      ]
    },
    {
      question: "Process 3: E-Verify Return using Electronic Verification Code (EVC)",
      answer: [
        "Generate EVC through net banking, pre-validated bank account, or Demat account.",
        "Enter the EVC when prompted.",
        "Submit and complete the verification."
      ]
    },
    {
      question: "Process 4: E-Verify Your Return using Net Banking",
      answer: [
        "Login to your net banking account.",
        "Click on the income tax e-filing tab.",
        "You'll be redirected to the e-filing portal.",
        "Click ‘e-Verify Return’ and select the return.",
        "Your return will be verified instantly."
      ]
    },
    {
      question: "Process 5: E-Verify Return using Bank ATM",
      answer: [
        "Swipe your debit card at your bank’s ATM.",
        "Select ‘Generate EVC for ITR Filing’.",
        "You will receive an EVC on your registered mobile.",
        "Use this EVC to verify your return on the portal."
      ]
    },
    {
      question: "Process 6: E-Verify through Bank Account Number",
      answer: [
        "Pre-validate your bank account on the e-filing portal.",
        "Select this mode and an EVC will be sent to your mobile.",
        "Use the EVC to complete verification."
      ]
    },
    {
      question: "Process 7: E-Verify through Demat Account Number",
      answer: [
        "Pre-validate your Demat account under Profile → Prevalidate Demat Account.",
        "Choose this option while verifying the return.",
        "Enter the EVC received on your mobile to complete the process."
      ]
    },
    {
      question: "To verify the income tax return offline, here is the process:-",
      answer: [
        "Take a printout of ITR-V (Acknowledgement).",
        "Sign it in blue ink.",
        "Send it by ordinary post/speed post to: CPC, Income Tax Department, Bengaluru – 560500.",
        "No courier or hand delivery is accepted.",
        "Send within 30 days of e-filing."
      ]
    }
  ];

    return (
    <div className="itr-guide-container">
      <h1 className="itr-guide-heading">Income Tax Return Verification (ITR) Guide</h1>
      {questions.map((item, index) => (
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

export default ITRVerificationGuide;
