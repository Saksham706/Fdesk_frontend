import React from 'react';
import './TdsSolution3.css';

const TdsSolution3 = () => {
  const services = [
    "Digitally sign Form 16/16A",
    "Online TAN/AIN Registration",
    "Identify wrong PAN",
    "Prepare E-TDS/TCS returns & correction in Form no. 24Q, 26Q, 27Q, 27EQ, 26QA",
    "Calculate monthly TDS amount to be deducted",
    "Generate MIS Reports - Challan and Return Status Report",
    "Import Excel and Conso files for adding deductors, deductees, challans etc",
    "Generate TDS/TCS certified(s) in Form no 12BA, 16, 16AA, 27D",
    "Automatically verify Challans with OLTAS"
  ];

  return (
    <div className="tds3-wrapper">
      <div className="tds3-container">
        <h2 className="tds3-title">What We Do</h2>
        <div className="tds3-grid">
          {services.map((item, index) => (
            <div key={index} className="tds3-card">
              <span className="tds3-icon">➜</span>
              <span className="tds3-text">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TdsSolution3;
