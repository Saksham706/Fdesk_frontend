import React from 'react';
import './TaxConsultancy3.css';
import { FaRegStar } from 'react-icons/fa';

const TaxConsultancy3 = () => {
  const noList = [
    "Tax Blunders",
    "Stress",
    "Confusion",
    "Running around CA offices",
    "Notices from Income Tax Department",
    "Spending hours figuring out taxes",
    "Penalties and legal complications",
    "Errors"
  ];

  const yesList = [
    "Personalized Experience",
    "Utilize benefits of Tax Expertise",
    "End-to-end Solutions",
    "10+ years of Industry Experience",
    "Saving taxes legally",
    "Compliance",
    "Peace of mind"
  ];

  return (
    <div className="why-choose-container">
      <h2>
        Why <span className="highlight">Choose</span> Us!!
      </h2>
      <div className="choose-boxes">
        <div className="box box-no">
          <h3>Say ‘NO’ to</h3>
          <ul>
            {noList.map((item, index) => (
              <li key={index}>
                <FaRegStar className="star-icon" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="box box-yes">
          <h3>Say ‘YES’ to</h3>
          <ul>
            {yesList.map((item, index) => (
              <li key={index}>
                <FaRegStar className="star-icon" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TaxConsultancy3;
