import React from 'react';
import './AadhaarGuide.css';

const AadhaarGuide = () => {
   return (
    <div className="itr-guide-container">
      <h1 className="itr-guide-heading">Aadhaar Card Guide</h1>
      {sections.map((item, index) => (
        <div key={index} className="itr-guide-box">
          <h3 className="itr-question">{item.title}</h3>
          <ul className="itr-answer">
            {item.content.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const sections = [
  {
    title: "What is Aadhaar Card?",
    content: [
      `The Aadhaar Card is a unique identification number issued by the Indian government to residents of India. It is a 12-digit number that serves as proof of identity and address. Aadhaar is issued by the Unique Identification Authority of India (UIDAI), a statutory authority established in January 2009 under the Aadhaar Act, 2016.`,
      `UIDAI collects biometric and demographic data and assigns a unique number upon verification. The Aadhaar Card contains full name, 12-digit number, address, gender, DOB, photograph, biometric data (fingerprints and iris scan), and a QR code for quick access.`
    ]
  },
  {
    title: "What is Baal Aadhaar?",
    content: [
      `"Baal Aadhaar" is a blue-colored Aadhaar card issued to children aged 0–5 years. It does not contain biometrics initially.`,
      `When a child turns 5, biometric updates are mandatory, including fingerprints and iris scan. At age 15, another biometric update is required.`,
      `A parent’s Aadhaar is necessary during enrolment. Baal Aadhaar is useful for school admission, government schemes, travel ID, etc.`
    ]
  },
  {
    title: "What is a masked Aadhaar Card?",
    content: [
      `A masked Aadhaar Card hides the first 8 digits of the number, displaying only the last 4. Despite masking, it is valid for all identity proof needs and retains other essential details like photo, name, DOB, and UIDAI signature.`
    ]
  },
  {
    title: "Features of the Aadhaar Card",
    content: [
      `Contains biometric data (fingerprints, iris, photo), demographic data, and a unique 12-digit number.`,
      `Can be linked with financial services like PAN, bank accounts, insurance, etc.`,
      `Used as valid proof of identity, address, and age. Application is voluntary but often required in services.`
    ]
  },
  {
    title: "Benefits of having an Aadhaar Card",
    content: [
      `Get LPG subsidy directly in your bank.`,
      `Open Jan Dhan Yojana accounts easily.`,
      `Mandatory for passport issuance, DigiLocker access, mobile SIM registration, and voter ID linkage.`,
      `Helps in receiving pensions and government schemes.`,
      `Aadhaar-based verification required for PAN linking, GST registration, IRCTC ticket bookings, business incorporation, and more.`
    ]
  },
  {
    title: "How to Apply for Aadhaar Card?",
    content: [
      `Locate the nearest UIDAI enrolment center and book an appointment.`,
      `Carry identity proof, address proof, and DOB proof.`,
      `Submit the enrolment form, provide biometric data (fingerprints, iris scan, photo).`,
      `Receive a 14-digit acknowledgment ID to track the application. Aadhaar card is delivered by post.`
    ]
  },
  {
    title: "Who can apply for Aadhaar Card?",
    content: [
      `Aadhaar is available to Indian citizens, NRIs, foreigners residing in India, and children.`,
      `Children under 5 require only a photo and a parent’s Aadhaar. No biometrics are taken until age 5.`,
      `At 15, biometric updates (fingerprint, iris scan, photo) are required.`
    ]
  },
  {
    title: "Checking Aadhaar Card status online",
    content: [
      `Go to https://uidai.gov.in → My Aadhaar → Check Aadhaar Status.`,
      `Enter your 14-digit EID, date and time of enrolment, and captcha.`,
      `Click “Check Status” to view current Aadhaar application status.`
    ]
  },
  {
    title: "What is e-Aadhaar, m-Aadhaar, and virtual ID?",
    content: [
      `e-Aadhaar: A digitally signed PDF version of your Aadhaar card downloaded from UIDAI. Password is first 4 letters of name + year of birth.`,
      `m-Aadhaar: Mobile app to store and access Aadhaar-linked info like name, DOB, gender, and photo.`,
      `Virtual ID (VID): A 16-digit temporary code for authentication instead of Aadhaar number, valid for 24 hours.`
    ]
  },
  {
    title: "How to update Aadhaar card details?",
    content: [
      `Login to UIDAI portal with Aadhaar and OTP.`,
      `Choose the demographic field to update (name, address, DOB, gender).`,
      `Upload valid documents, pay Rs. 50 online.`,
      `Track update using Service Request Number. Post-verification, you’ll be notified via SMS.`
    ]
  },
  {
    title: "How many times the Aadhaar can be updated?",
    content: [
      `Name: 2 times.`,
      `Gender: 1 time.`,
      `Date of Birth: Once (only in case of error).`,
      `Address: Unlimited updates allowed.`,
      `Beyond limits, visit a UIDAI regional office.`
    ]
  },
  {
    title: "Aadhaar Card Linking Process",
    content: [
      `Link Aadhaar to bank accounts, PAN, ration cards, etc. through OTP-based online verification.`,
      `Can be done via net banking, mobile app, SMS, ATM, or bank branch.`,
      `Link PAN via income tax website or SMS. Ration card linking possible via PDS center or UIDAI portal.`
    ]
  },
  {
    title: "How to Retrieve Lost or Forgotten EID/UID?",
    content: [
      `Online: Visit UIDAI → Retrieve Lost EID/UID → Enter name, mobile/email → Receive OTP → Get EID/UID on mobile/email.`,
      `m-Aadhaar App: Use Retrieve option, enter details, get OTP, and retrieve info.`,
      `Offline: Visit Aadhaar center with demographic/biometric details to get UID/EID and print for Rs. 30.`
    ]
  },
  {
    title: "Aadhaar Reprint",
    content: [
      `Visit UIDAI site → My Aadhaar → Order Aadhaar Reprint → Enter details and make payment.`,
      `Reprinted Aadhaar will be delivered to your registered address.`
    ]
  },
  {
    title: "Virtual ID",
    content: [
      `Virtual ID is a temporary 16-digit number mapped to your Aadhaar. Valid for 24 hours.`,
      `Use it for e-KYC instead of sharing your Aadhaar number.`,
      `Generate VID on https://resident.uidai.gov.in → My Aadhaar → Aadhaar Services → Generate VID.`
    ]
  },
  {
    title: "e-KYC",
    content: [
      `e-KYC is a digitally signed document issued by UIDAI.`,
      `It contains your Aadhaar-linked details like name, DOB, address, and mobile number.`,
      `Can be shared electronically for identity verification with banks, telecom, etc.`
    ]
  }
];


export default AadhaarGuide;
