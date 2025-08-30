import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './FileReturn.css';
import FillRating from '../../../components/Products/First/FillRating/FillRating';
import SourceIncome from '../../../components/Products/First/SourceIncome/SourceIncome';
import Mistake from '../../../components/Products/First/Mistake/Mistake';
import Penalties from '../../../components/Products/First/Penalties/Penalties';

const questions = [
  { key: 'salary', text: "Income from Salary/Pension?" },
  { key: 'houseProperty', text: "Income from House Property (Home Loan/ Rental Income, etc)?" },
  { key: 'business', text: "Income from Business/Profession?" },
  { key: 'capitalGains', text: "Income from Capital Gains (Shares/ Mutual Funds/Property etc)?" },
  { key: 'otherSources', text: "Income from Other Sources?" },
  { key: 'foreignSources', text: "Income from Foreign Source?" },
];

const FileReturn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    salary: false,
    houseProperty: false,
    business: false,
    capitalGains: false,
    otherSources: false,
    foreignSources: false,
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value === 'yes' }));
  };

  const handleSubmit = async () => {
  const hasSelectedSource = Object.values(formData).some(val => val);

  if (!hasSelectedSource) {
    alert('You should select at least one income source');
    return;
  }

  try {
    await axios.post(`${import.meta.env.VITE_API_URL}/api/itr/step1`, formData);
    if (formData.business || formData.capitalGains) {
      navigate('/ca-request');
    } else {
      navigate('/form16');
    }
  } catch (error) {
    console.error('Error submitting ITR step 1:', error);
  }
};

  return (
    <>
    <div className="file-return-container">
      <h2 className="title">Income Tax Return (ITR) eFiling Platform</h2>
      <p className="subtitle">
        FdeskSolutions <strong>simplifies e-filing</strong> your Income Tax Return! Choose your income source and file ITR today!
      </p>

      <div className="question-list">
        {questions.map((q, idx) => (
          <div className="question-item" key={q.key}>
            <p className="question-text">Q{idx + 1}. {q.text}</p>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name={q.key}
                  value="yes"
                  onChange={(e) => handleChange(q.key, e.target.value)}
                /> Yes
              </label>
              <label>
                <input
                  type="radio"
                  name={q.key}
                  value="no"
                  defaultChecked
                  onChange={(e) => handleChange(q.key, e.target.value)}
                /> No
              </label>
            </div>
          </div>
        ))}
      </div>

      <div className="continue-button-container">
        <button className="continue-button" onClick={handleSubmit}>Continue</button>
      </div>
    </div>
    <FillRating/>
    <SourceIncome/>
    <Mistake/>
    <Penalties/>
    </>
  );
};

export default FileReturn;
