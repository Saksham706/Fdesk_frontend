import React, { useState } from 'react';
import './IncomeTaxCalculator.css';

const IncomeTaxCalculator = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    profession: '',
    salary: '',
    businessIncome: '',
    rentalIncome: '',
    homeLoanInterest: '',
    fdInterest: '',
    savingsInterest: '',
    otherInterest: '',
    otherIncome: '',
    section80C: '',
    section80D: '',
    section80E: '',
    otherDeductions: '',
  });

  const [step, setStep] = useState(1);
  const [tax, setTax] = useState(null);

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculateTax = () => {
    const totalIncome =
      Number(formData.salary) +
      Number(formData.businessIncome) +
      Number(formData.rentalIncome) +
      Number(formData.fdInterest) +
      Number(formData.savingsInterest) +
      Number(formData.otherInterest) +
      Number(formData.otherIncome);

    const deductions =
      Number(formData.section80C) +
      Number(formData.section80D) +
      Number(formData.section80E) +
      Number(formData.otherDeductions) +
      Number(formData.homeLoanInterest);

    const taxableIncome = Math.max(totalIncome - deductions, 0);

    const age = new Date().getFullYear() - new Date(formData.dob).getFullYear();
    const isSeniorCitizen = age >= 60;
    const basicExemption = isSeniorCitizen ? 300000 : 250000;

    let calculatedTax = 0;
    if (taxableIncome <= basicExemption) {
      calculatedTax = 0;
    } else if (taxableIncome <= 500000) {
      calculatedTax = (taxableIncome - basicExemption) * 0.05;
    } else if (taxableIncome <= 1000000) {
      calculatedTax = (500000 - basicExemption) * 0.05 + (taxableIncome - 500000) * 0.2;
    } else {
      calculatedTax =
        (500000 - basicExemption) * 0.05 +
        (500000 * 0.2) +
        (taxableIncome - 1000000) * 0.3;
    }

    setTax(calculatedTax);
  };

  const stepsList = [
    { icon: '📋', title: 'About Yourself' },
    { icon: '💰', title: 'Income Details' },
    { icon: '➕', title: 'Other Income' },
    { icon: '✂', title: 'Deductions' },
  ];

  return (
    <div className="tax-container">
      <aside className="steps-sidebar">
        {stepsList.map((s, index) => (
          <div
            key={index}
            className={`sidebar-step ${step === index + 1 ? 'active' : ''}`}
            onClick={() => setStep(index + 1)}
          >
            <span className="step-icon">{s.icon}</span>
            <span className="step-text">{s.title}</span>
          </div>
        ))}
      </aside>

      <main className="form-card">
        {step === 1 && (
          <>
            <h3>About Yourself</h3>
            <div className="input-grid">
              <div>
                <label>Name</label>
                <input name="name" value={formData.name} onChange={handleChange} />
              </div>
              <div>
                <label>Email</label>
                <input name="email" type="email" value={formData.email} onChange={handleChange} />
              </div>
              <div>
                <label>Date of Birth</label>
                <input name="dob" type="date" value={formData.dob} onChange={handleChange} />
              </div>
              <div>
                <label>Profession</label>
                <select name="profession" value={formData.profession} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="Engineer">Engineer</option>
                  <option value="Doctor">Doctor</option>
                  <option value="CA">CA</option>
                </select>
              </div>
            </div>
            <div className="button-group">
              <button className="next-btn" onClick={handleNext}>Next</button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h3>Income Details</h3>
            <div className="input-grid">
              <div>
                <label>Salary / Pension</label>
                <input name="salary" type="number" value={formData.salary} onChange={handleChange} />
              </div>
              <div>
                <label>Business Income</label>
                <input name="businessIncome" type="number" value={formData.businessIncome} onChange={handleChange} />
              </div>
              <div>
                <label>Rental Income</label>
                <input name="rentalIncome" type="number" value={formData.rentalIncome} onChange={handleChange} />
              </div>
              <div>
                <label>Home Loan Interest</label>
                <input name="homeLoanInterest" type="number" value={formData.homeLoanInterest} onChange={handleChange} />
              </div>
            </div>
            <div className="button-group">
              <button onClick={handleBack}>Back</button>
              <button className="next-btn" onClick={handleNext}>Next</button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h3>Other Income</h3>
            <div className="input-grid">
              <div>
                <label>FD Interest</label>
                <input name="fdInterest" type="number" value={formData.fdInterest} onChange={handleChange} />
              </div>
              <div>
                <label>Savings A/C Interest</label>
                <input name="savingsInterest" type="number" value={formData.savingsInterest} onChange={handleChange} />
              </div>
              <div>
                <label>Other Interest Income</label>
                <input name="otherInterest" type="number" value={formData.otherInterest} onChange={handleChange} />
              </div>
              <div>
                <label>Other Income</label>
                <input name="otherIncome" type="number" value={formData.otherIncome} onChange={handleChange} />
              </div>
            </div>
            <div className="button-group">
              <button onClick={handleBack}>Back</button>
              <button className="next-btn" onClick={handleNext}>Next</button>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <h3>Deductions</h3>
            <div className="input-grid">
              <div>
                <label>Section 80C</label>
                <input name="section80C" type="number" value={formData.section80C} onChange={handleChange} />
              </div>
              <div>
                <label>Section 80D</label>
                <input name="section80D" type="number" value={formData.section80D} onChange={handleChange} />
              </div>
              <div>
                <label>Section 80E</label>
                <input name="section80E" type="number" value={formData.section80E} onChange={handleChange} />
              </div>
              <div>
                <label>Other Deductions</label>
                <input name="otherDeductions" type="number" value={formData.otherDeductions} onChange={handleChange} />
              </div>
            </div>
            <div className="button-group">
              <button onClick={handleBack}>Back</button>
              <button className="next-btn" onClick={calculateTax}>Calculate</button>
            </div>
          </>
        )}

        {tax !== null && (
          <div className="tax-result">
            <h3>Estimated Tax Payable: ₹{tax.toFixed(2)}</h3>
          </div>
        )}
      </main>
    </div>
  );
};

export default IncomeTaxCalculator;
