import React, { useState } from 'react';
import './Section234FCal.css';

const Section234FCal = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    income: '',
    filingDate: ''
  });

  const [penalty, setPenalty] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const calculatePenalty = () => {
    if (!formData.income || !formData.filingDate) {
      alert('Please fill all required fields');
      return;
    }

    const income = parseFloat(formData.income.replace(/,/g, ''));
    const filingDate = new Date(formData.filingDate);
    const dueDate = new Date('2024-07-31'); // FY 2024-2025 due date is 31-Jul-2024
    const lateDays = Math.max(0, Math.floor((filingDate - dueDate) / (1000 * 60 * 60 * 24)));
    
    let calculatedPenalty = 0;
    
    if (lateDays > 0) {
      if (income <= 500000) {
        calculatedPenalty = 0; // No penalty if income ≤ 5L
      } else if (lateDays <= 30) {
        calculatedPenalty = 1000;
      } else {
        calculatedPenalty = 5000;
      }
    }

    setPenalty(calculatedPenalty);
    setShowResult(true);
  };

  const formatIncome = (value) => {
    return value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleIncomeChange = (e) => {
    const formattedValue = formatIncome(e.target.value);
    setFormData({
      ...formData,
      income: formattedValue
    });
  };

  return (
  <div className="section234f-bg">
    <div className="section234f-main">
      <div className="section234f-left">
        <h1>Calculator on Section 234F</h1>
        <p>
          Under the Income Tax Act of 1961, every assessee is required to file his/her income tax return on or before the due date prescribed under section 139(1). The last date to file ITR for individuals is 31st July of the relevant assessment year and 31st October for taxpayers whose accounts are subject to audit.
          <br /><br />
          If a person who is required to file an Income Tax Return (ITR) fails to do so on time, he is subject to a penalty. To see how much money you owe in penalties, use our section 234F calculator.
        </p>
      </div>
      <div className="section234f-right">
        <h2>
          Helps you to calculate late Fees on delayed filing of income tax return for <br />
          FY 2024-2025 (AY 2025-2026)
        </h2>
        <form className="section234f-form" onSubmit={e => {e.preventDefault(); calculatePenalty();}}>
          <div className="section234f-form-group">
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
          </div>
          <div className="section234f-form-group">
            <label>Email Id</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
          </div>
          <div className="section234f-form-group">
            <label>Gross Total Income / Total Income</label>
            <input type="text" name="income" value={formData.income} onChange={handleIncomeChange} placeholder="Enter amount" />
          </div>
          <div className="section234f-form-group">
            <label>Return filing date</label>
            <input type="date" name="filingDate" value={formData.filingDate} onChange={handleChange} />
          </div>
          <button type="submit" className="section234f-calc-btn">Calculate</button>
        </form>

        <div className="section234f-fee-circle">
          <div className="section234f-fee-circle-inner">
            Late Fees<br />for FY. 2024-2025<br />(AY. 2025-2026)
          </div>
        </div>

        {showResult && (
          <div className="section234f-result">
            <h3>Penalty: ₹{penalty.toLocaleString('en-IN')}</h3>
            <div>
              {penalty === 0 ? (
                <p>No penalty applicable as your income is below ₹5,00,000 or you filed on time</p>
              ) : penalty === 1000 ? (
                <p>Penalty for filing within 30 days after due date</p>
              ) : (
                <p>Penalty for filing after 30 days from due date</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

};

export default Section234FCal;