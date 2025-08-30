import React from 'react'
import './GstEwayGuide.css'

const GstEwayGuide = () => {
    const gstFaqEwayBillData = [
  {
    question: "What is the Meaning of E-Way Bill?",
    answer: [
      "An E-Way Bill (Electronic Way Bill) is a document required under the GST regime for the movement of goods valued over ₹50,000.",
      "It is generated electronically on the GST e-way bill portal and is mandatory for both inter-state and certain intra-state movements.",
      "It contains details like consignor, consignee, goods, and transporter information."
    ]
  },
  {
    question: "What are the Benefits of E-Way Bill?",
    answer: [
      "Reduces tax evasion by tracking goods movement in real time.",
      "Faster and more efficient logistics with minimal checking.",
      "Single document for movement of goods throughout India.",
      "Improves transparency and compliance.",
      "Reduces documentation burden for transporters and suppliers."
    ]
  },
  {
    question: "How Does the E-Way Bill Mechanism Work?",
    answer: [
      "The supplier, recipient, or transporter logs in to the e-way bill portal.",
      "Fills in details of goods, vehicle, GSTIN, invoice number, etc.",
      "An e-way bill number (EBN) is generated along with a QR code and barcode.",
      "The bill must be carried by the person in charge of the conveyance, either physically or electronically."
    ]
  },
  {
    question: "When is an E-Way Bill Required or Not Required to be Generated?",
    answer: [
      "Required when goods worth more than ₹50,000 are transported by road, air, rail, or ship.",
      "Required for both inter-state and certain intra-state transfers.",
      "Not required when:",
      "• Goods are transported by non-motorized conveyance.",
      "• Goods fall under exempt categories (e.g., fresh fruits, vegetables).",
      "• Movement occurs within 10 km in some states (for certain types of transactions)."
    ]
  },
  {
    question: "In What Cases is an E-Way Bill Required Even if the Consignment Value is Less Than ₹50,000?",
    answer: [
      "Inter-state transport of goods by a registered person.",
      "Transport of handicraft goods by an unregistered person to another state.",
      "Inter-state transport of goods by a job worker.",
      "Movement of goods by e-commerce operators or courier agencies."
    ]
  },
  {
    question: "Which Form Needs to Be Filled for Generation of E-Way Bill and by Whom?",
    answer: [
      "Form GST EWB-01 is used for generating an e-way bill.",
      "Part A: Filled by supplier/recipient — includes invoice, value, GSTINs.",
      "Part B: Filled by transporter — includes vehicle details.",
      "Any of the three (supplier, transporter, or recipient) can generate the bill depending on responsibility."
    ]
  },
  {
    question: "What Documents Are Required to Generate E-Way Bill?",
    answer: [
      "Invoice or bill of supply or delivery challan.",
      "Transporter ID or vehicle number.",
      "Details of goods, quantity, and tax rates.",
      "GSTIN of the supplier and recipient (if registered)."
    ]
  },
  {
    question: "How to Register for E-Way Bill?",
    answer: [
      "Visit the official portal: https://ewaybillgst.gov.in.",
      "Choose 'e-Way Bill Registration'.",
      "Enter your GSTIN, validate using OTP, and set credentials.",
      "You will then be registered for generating e-way bills."
    ]
  },
  {
    question: "What is the Process for Registration on E-Way Bill Portal Through SMS?",
    answer: [
      "Log in to the e-way bill portal using credentials.",
      "Go to 'Registration' > 'For SMS', and enable SMS facility.",
      "Add your mobile number and get it verified using OTP.",
      "Once registered, you can use SMS codes to generate/cancel e-way bills."
    ]
  },
  {
    question: "What is the Process for Registration on E-Way Bill Portal Using Android App?",
    answer: [
      "Only enrolled transporters can use the e-way bill Android app.",
      "They must download the app from the official source or get it from the department.",
      "Login credentials are the same as web portal.",
      "You can generate, cancel, and update e-way bills using the app."
    ]
  },
  {
    question: "How to Register for E-Way Bill Using Web Portal?",
    answer: [
      "Go to https://ewaybillgst.gov.in.",
      "Click on ‘e-Way Bill Registration’.",
      "Enter GSTIN and CAPTCHA, then proceed.",
      "Verify with OTP sent to registered mobile.",
      "Set username and password to complete registration."
    ]
  },
  {
    question: "How to Generate E-Way Bill Through Web Portal?",
    answer: [
      "Log in to the e-way bill portal.",
      "Click on ‘Generate New’ under e-Way Bill option.",
      "Fill in Part A (goods and invoice details) and Part B (vehicle details).",
      "Submit to get the E-Way Bill Number (EBN) with barcode and validity."
    ]
  },
  {
    question: "What is Bar Code in the Generated E-Way Bill?",
    answer: [
      "The barcode (or QR code) allows quick scanning by tax officers.",
      "It contains essential E-Way Bill details like EBN, GSTIN, date, and type of goods.",
      "Helps in faster verification and reduces manual intervention."
    ]
  },
  {
    question: "How to Cancel E-Way Bill?",
    answer: [
      "Login to the portal and go to ‘Cancel’ option under e-Way Bill.",
      "Enter the 12-digit EBN and reason for cancellation.",
      "E-Way Bill can be cancelled within 24 hours of generation.",
      "Cannot be cancelled if verified by officer during transit."
    ]
  },
  {
    question: "How to Cancel E-Way Bill in Case of Wrong Information?",
    answer: [
      "If the wrong details are entered (like wrong vehicle number or GSTIN), cancel the bill within 24 hours.",
      "Generate a fresh e-way bill with the correct information.",
      "If not cancelled within 24 hours and checked by an officer, you may face penalties."
    ]
  }
];

 return (
    <div className="itr-guide-container">
      <h1 className="itr-guide-heading">GST E-way Bills Guide</h1>
      {gstFaqEwayBillData.map((item, index) => (
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

export default GstEwayGuide
