import React, { useState } from "react";
import "./SalaryIncome.css";
import { Link } from 'react-router-dom';

const SalaryIncome = () => {
  const [salarySections, setSalarySections] = useState([
    { id: Date.now(), showHRA: false, showLTA: false }
  ]);

  const addSalarySection = () => {
    setSalarySections([
      ...salarySections,
      { id: Date.now(), showHRA: false, showLTA: false }
    ]);
  };

  const deleteSalarySection = (id) => {
    const updatedSections = salarySections.filter((section) => section.id !== id);
    setSalarySections(updatedSections);
  };

  const toggleHRA = (id, value) => {
    setSalarySections(prev =>
      prev.map(sec =>
        sec.id === id ? { ...sec, showHRA: value } : sec
      )
    );
  };

  const toggleLTA = (id, value) => {
    setSalarySections(prev =>
      prev.map(sec =>
        sec.id === id ? { ...sec, showLTA: value } : sec
      )
    );
  };

  return (
    <>
      <h2 className="page-title">ENTER YOUR SALARY DETAILS</h2>
      <div className="salary-income-wrapper">
        {salarySections.map((section, index) => (
          <div className="salary-container" key={section.id}>
            {index !== 0 && (
              <button
                className="delete-button"
                onClick={() => deleteSalarySection(section.id)}
                title="Delete This Salary Entry"
              >
                ×
              </button>
            )}

            <div className="salary-box">
              <h3>Salary Income {index + 1}</h3>

              <form className="salary-form">
                <div className="form-row">
                  <input type="text" placeholder="Salary / Pension Income (Annual)*" />
                  <input type="text" placeholder="Value of Perquisites" />
                  <input type="text" placeholder="Profit in lieu of Salary" />
                </div>

                <h4>Do you want to claim HRA?</h4>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name={`hra-${index}`}
                      onChange={() => toggleHRA(section.id, false)}
                      checked={!section.showHRA}
                    /> No
                  </label>
                  <label>
                    <input
                      type="radio"
                      name={`hra-${index}`}
                      onChange={() => toggleHRA(section.id, true)}
                      checked={section.showHRA}
                    /> Yes
                  </label>
                </div>

                {section.showHRA && (
                  <>
                    <div className="form-row">
                      <input type="text" placeholder="Basic Salary" />
                      <input type="text" placeholder="Dearness Allowance" />
                      <input type="text" placeholder="Total HRA Received" />
                    </div>
                    <div className="form-row">
                      <select>
                        <option value="">Select City Type</option>
                        <option value="metro">Metro</option>
                        <option value="nonmetro">Non-Metro</option>
                      </select>
                      <input type="text" placeholder="Actual Rent Paid" />
                      <input type="text" placeholder="Eligible HRA Exemption" readOnly />
                    </div>
                  </>
                )}

                <h4>Do you want to claim LTA / Gratuity / Pension?</h4>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name={`claim-${index}`}
                      onChange={() => toggleLTA(section.id, false)}
                      checked={!section.showLTA}
                    /> No
                  </label>
                  <label>
                    <input
                      type="radio"
                      name={`claim-${index}`}
                      onChange={() => toggleLTA(section.id, true)}
                      checked={section.showLTA}
                    /> Yes
                  </label>
                </div>

                {section.showLTA && (
                  <div className="form-row">
                    <select>
                      <option value="">Specify if any other</option>
                      <option value="LTA">LTA</option>
                      <option value="Gratuity">Gratuity</option>
                      <option value="Pension">Pension</option>
                    </select>
                    <input type="text" placeholder="Amount" />
                  </div>
                )}

                <h4> Less: Deductions u/s 16</h4>
                <div className="form-row">
                  <input type="text" placeholder="Standard Deduction" value="0" readOnly />
                  <input type="text" placeholder="Professional Tax" />
                </div>

                <h4>Employer Details</h4>
                <div className="form-row">
                  <input type="text" placeholder="Company / Employer Name*" />
                  <input type="text" placeholder="TDS Deducted by Employer" />
                  <input type="text" placeholder="TAN of Employer" />
                </div>

                <div className="summary-section-inner">
                  <div className="summary-row">
                    <span className="summary-label">Net Salary (Gross Salary - Exempted Allowances) =</span>
                    <span className="summary-value">₹ 0</span>
                  </div>
                  <p className="summary-note">
                    Note: Deduction of ₹75,000 for New Regime will be auto-calculated.
                  </p>
                  <div className="summary-row">
                    <span className="summary-label">Income chargeable under the head 'Salaries' =</span>
                    <span className="summary-value">₹ 0</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        ))}

        {/* --- Buttons --- */}
        <div className="button-group">
          <button onClick={addSalarySection} className="add-buttons">
            + Add Salary Income
          </button>
          <Link to="/ca-request">
            <button className="ca-button">Get a CA Assistant</button>
          </Link>
          <Link to='/deduction'><button className="continue-button">Continue</button></Link>
        </div>
      </div>
    </>
  );
};

export default SalaryIncome;
