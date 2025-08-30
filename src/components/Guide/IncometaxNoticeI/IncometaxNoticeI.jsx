import React from 'react';
import './IncometaxNotice.css';

const notices = [
  {
    section: "142(1)",
    title: "Notice under Section 142(1)",
    description: "A ITR notice is served by the assessing officer u/s 142 1 in two cases. Firstly, if the officer requires additional information and documents pertaining to your income tax returns..."
  },
  {
    section: "139(9)",
    title: "Notice sent under Section 139(9)",
    description: "If the AO believes that a defective income tax return is filed, he will serve you an income tax defective return notice under section 139(9)..."
  },
  {
    section: "148",
    title: "Notice under Section 148",
    description: "This ITR notice is sent in cases where the assessing officer(AO) has a reason to believe that a taxpayer has filed his ITR on a lower income or not filed when the law mandated him..."
  },
  {
    section: "156",
    title: "Notice sent under Section 156",
    description: "If there is any type of demand like penalty, fine, tax or any other sum payable, the AO will issue a notice under Section 156."
  },
  {
    section: "143(1)",
    title: "Intimation under Section 143(1)",
    description: "After you file and verify your ITR, they are processed online by the Central Processing Centre and you may get this intimation for three reasons."
  },
  {
    section: "143(2) & 143(3)",
    title: "Notice under Section 143(2) for scrutiny assessment u/s 143(3)",
    description: "If the return is picked for detailed scrutiny, the AO issues a notice u/s 143(2), followed by a scrutiny notice u/s 143(3)."
  },
  {
    section: "131",
    title: "Notice under Section 131",
    description: "If the assessing officer believes that the taxpayer is concealing his income or a part thereof, he can serve a notice under this section..."
  },
  {
    section: "245",
    title: "Notice under Section 245",
    description: "This notice u/s 245 of the Income Tax Act is served by the assessing officer(AO) if it is believed that you have not paid taxes in the previous FY..."
  },
];

const reasons = [
  "ITR Mismatch",
  "Mismatch in the amount of TDS reported.",
  "An error in your income tax return.",
  "Lack of submission of all the documents.",
  "Non-filing or delayed income tax return filing."
];

const IncometaxNoticeI = () => {
  return (
    <div className="notices-container">
      <h1 className="main-title">Types of Income Tax Notices</h1>
      <p className="sub-title">
        The income tax department sends different types of ITR notices to taxpayers depending on the cause of the notice. These notices are as follows –
      </p>

      <div className="card-grid">
        {notices.map((notice, index) => (
          <div key={index} className="notice-card">
            <div className="card-icon">📄 Section {notice.section}</div>
            <h3>{notice.title}</h3>
            <p>{notice.description}</p>
            <button className="read-more">Read more →</button>
          </div>
        ))}
      </div>

      <div className="reasons-section">
        <h2>Income Tax Notice: Reasons for Receiving</h2>
        <ul>
          {reasons.map((reason, index) => (
            <li key={index}>✅ {reason}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IncometaxNoticeI;
