import React, { useState } from 'react';
import './ItrEligibility.css';

const ItrEligibility = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    profession: '',
    salary: '',
    businessIncome: '',
    rentalIncome: '',
    homeLoanInterest: '',
    deductions: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="calculator-container">
      <div className="calculator-footer">
        <h3>About This Calculator</h3>
        <p>
          This Income Tax Calculator helps you estimate your tax liability based on your income, 
          deductions, and other details. The results are for informational purposes only and 
          should not be considered as professional financial advice. For exact calculations, 
          please consult a certified tax professional.
        </p>
        <p>
          In India, individuals, Hindu Undivided Families (HUFs), and other entities are 
          required to file an Income Tax Return if their income exceeds the exemption limit 
          specified under the Income Tax Act.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        
        {/* Personal Info */}
        <div className="form-section">
          <h3>Personal Information</h3>
          <div className="form-grid">
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
            <input type="text" name="profession" placeholder="Profession" value={formData.profession} onChange={handleChange} />
          </div>
        </div>

        {/* Income Details */}
        <div className="form-section">
          <h3>Income Details</h3>
          <div className="form-grid">
            <input type="number" name="salary" placeholder="Salary Income" value={formData.salary} onChange={handleChange} />
            <input type="number" name="businessIncome" placeholder="Business Income" value={formData.businessIncome} onChange={handleChange} />
            <input type="number" name="rentalIncome" placeholder="Rental Income" value={formData.rentalIncome} onChange={handleChange} />
            <input type="number" name="homeLoanInterest" placeholder="Home Loan Interest" value={formData.homeLoanInterest} onChange={handleChange} />
          </div>
        </div>

        {/* Deductions */}
        <div className="form-section">
          <h3>Deductions</h3>
          <input type="number" name="deductions" placeholder="Total Deductions" value={formData.deductions} onChange={handleChange} />
        </div>

        {/* Submit */}
        <div className="form-submit">
          <button className='butom' type="submit">Calculate Tax</button>
        </div>
      </form>
    </div>
  );
};

export default ItrEligibility;