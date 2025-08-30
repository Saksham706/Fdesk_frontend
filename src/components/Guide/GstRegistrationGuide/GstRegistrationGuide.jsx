import React from 'react'
import './GstRegistrationGuide.css'
const GstRegistrationGuide = () => {
    const gstFaqRegistrationData = [
  {
    question: "What is GST Registration?",
    answer: [
      "GST Registration is the process through which a business gets registered under the Goods and Services Tax (GST) regime.",
      "Upon successful registration, a unique 15-digit GSTIN (Goods and Services Tax Identification Number) is issued.",
      "It is mandatory for businesses to collect and remit GST once registered."
    ]
  },
  {
    question: "Who Should Register for GST?",
    answer: [
      "Businesses with aggregate turnover exceeding ₹40 lakh (goods) or ₹20 lakh (services); lower threshold in special category states.",
      "Individuals making inter-state taxable supply of goods/services.",
      "E-commerce operators and suppliers selling via e-commerce platforms.",
      "Casual taxable persons and non-resident taxable persons.",
      "Agents of suppliers and input service distributors (ISD)."
    ]
  },
  {
    question: "Benefits of GST Registration",
    answer: [
      "Legal recognition as a supplier of goods or services.",
      "Authorized to collect GST and claim input tax credit (ITC).",
      "Enables seamless input tax credit across the supply chain.",
      "Improves business credibility and eligibility for government tenders.",
      "Mandatory for expanding business to inter-state operations or online platforms."
    ]
  },
  {
    question: "Types of GST Registration",
    answer: [
      "Normal Taxpayer – Most businesses under GST fall into this category.",
      "Composition Scheme – For small taxpayers with turnover up to ₹1.5 crore (lower compliance).",
      "Casual Taxable Person – For businesses with occasional operations in a different state.",
      "Non-Resident Taxable Person – For non-residents supplying goods/services in India.",
      "Input Service Distributor (ISD) – For distributing ITC across branches.",
      "E-commerce Operator – For platforms facilitating sales of goods/services."
    ]
  },
  {
    question: "Documents Required for GST Registration",
    answer: [
      "PAN card of the business or applicant.",
      "Aadhaar card of the applicant.",
      "Proof of business registration or incorporation certificate.",
      "Address proof of the business place (electricity bill, rent agreement, etc.).",
      "Bank account details and canceled cheque.",
      "Photographs of the applicant/authorized signatory.",
      "Digital Signature Certificate (DSC) – for companies/LLPs."
    ]
  },
  {
    question: "How to Register for GST in India?",
    answer: [
      "Step 1: Visit the GST portal – https://www.gst.gov.in/",
      "Step 2: Click on 'Services' > 'Registration' > 'New Registration'.",
      "Step 3: Fill in details such as PAN, mobile number, email, and state.",
      "Step 4: Enter OTPs sent to your mobile/email and proceed to Part B.",
      "Step 5: Upload required documents (PAN, Aadhaar, address proof, etc.).",
      "Step 6: Submit application using DSC or Aadhaar-based e-verification.",
      "Step 7: ARN (Application Reference Number) will be generated; you can track the status online.",
      "Step 8: Upon verification, GSTIN will be issued and sent to your registered email ID."
    ]
  }
];

  return (
    <div className="itr-guide-container">
      <h1 className="itr-guide-heading">GST Registration Guide</h1>
      {gstFaqRegistrationData.map((item, index) => (
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

export default GstRegistrationGuide
