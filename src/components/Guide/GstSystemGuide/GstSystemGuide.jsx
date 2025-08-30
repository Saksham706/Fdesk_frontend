import React from 'react'
import './GstSystemGuide.css'
const GstSystemGuide = () => {

    const gstFaqExtendedData = [
  {
    question: "Who is a GST Practitioner?",
    answer: [
      "A GST Practitioner is a tax professional approved by the GST authorities to perform GST-related activities on behalf of taxpayers.",
      "They can file GST returns, apply for registration, make refunds, and represent taxpayers before tax authorities.",
      "They must be registered on the GST portal and have passed the prescribed examination."
    ]
  },
  {
    question: "What is the Role of CBIC?",
    answer: [
      "CBIC (Central Board of Indirect Taxes and Customs) is responsible for administering GST, customs, and excise duties in India.",
      "It formulates policies, implements the law, and monitors compliance related to CGST, IGST, and UTGST.",
      "It also coordinates with state governments and GSTN for smooth functioning of the GST regime."
    ]
  },
  {
    question: "What is the Role of GST Suvidha Providers (GSP)?",
    answer: [
      "GSPs are authorized entities that provide simplified and automated GST compliance solutions to taxpayers.",
      "They help businesses connect securely with the GST Network (GSTN) via APIs.",
      "Services include return filing, reconciliation, invoicing, and ledger management using software tools."
    ]
  },
  {
    question: "What is the Role of Banks under GST System?",
    answer: [
      "Authorized banks facilitate electronic payment of GST through net banking, NEFT, RTGS, and over-the-counter payments.",
      "They integrate with the GST portal to report transaction statuses and generate challans.",
      "They ensure timely credit of tax payments to government accounts."
    ]
  },
  {
    question: "What is RBI’s Role in Goods and Services Tax Regime?",
    answer: [
      "RBI oversees the functioning of authorized banks under the GST regime.",
      "It ensures the smooth settlement and reporting of tax payments from banks to the government.",
      "It also helps coordinate with the government and GSTN regarding payment gateways and fund flow."
    ]
  },
  {
    question: "What is the GST Council?",
    answer: [
      "The GST Council is the apex decision-making body for all matters related to GST.",
      "It comprises the Union Finance Minister (Chairperson), Minister of State (Finance), and Finance Ministers of all states.",
      "The Council recommends tax rates, exemptions, threshold limits, and dispute resolution mechanisms."
    ]
  },
  {
    question: "What is GSTN?",
    answer: [
      "GSTN (Goods and Services Tax Network) is a not-for-profit, non-government company that provides the IT backbone for the GST system.",
      "It maintains the GST portal (www.gst.gov.in), where taxpayers register, file returns, and make payments.",
      "It also shares data with CBIC, state governments, and other authorities for tax administration."
    ]
  },
  {
    question: "What is the Role of Accountant General under GST System?",
    answer: [
      "The Accountant General ensures proper accounting of GST revenue and reconciles payments made by taxpayers.",
      "They audit government receipts, monitor fund flows, and report discrepancies to the authorities.",
      "They play a key role in ensuring transparency and accountability in public finance."
    ]
  },
  {
    question: "Who is a Taxpayer under GST System?",
    answer: [
      "Any individual or entity engaged in the supply of goods or services and liable to pay GST is considered a taxpayer.",
      "Includes manufacturers, traders, service providers, e-commerce operators, and importers.",
      "A taxpayer must register under GST if their turnover exceeds the prescribed threshold or they fall under mandatory registration criteria."
    ]
  }
];

return (
    <div className="itr-guide-container">
      <h1 className="itr-guide-heading">GST System Guide</h1>
      {gstFaqExtendedData.map((item, index) => (
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

export default GstSystemGuide
