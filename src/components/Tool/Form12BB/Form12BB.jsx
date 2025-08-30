import React, { useState } from "react";
import "./Form12BB.css";

const steps = [
  { id: 1, title: "Details of Employee", icon: "👤" },
  { id: 2, title: "House Rent Allowance", icon: "🏠" },
  { id: 3, title: "Leave Travel Concessions", icon: "✈️" },
  { id: 4, title: "Interest on Home Loan", icon: "🏦" },
  { id: 5, title: "Deduction under Chapter VI-A", icon: "📄" },
];

export default function Form12BB() {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (activeStep < steps.length) setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    if (activeStep > 1) setActiveStep(activeStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  const renderStepForm = () => {
    switch (activeStep) {
      // STEP 1
      case 1:
        return (
          <div className="form-card">
            <div className="form-row">
              <div className="form-group">
                <label>Name *</label>
                <input type="text" name="name" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>PAN *</label>
                <input type="text" name="pan" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Father's Name *</label>
                <input type="text" name="fatherName" onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Place *</label>
                <input type="text" name="place" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Mobile *</label>
                <input type="text" name="mobile" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Email Id *</label>
                <input type="email" name="email" onChange={handleChange} />
              </div>
            </div>

            <div className="form-group full-width">
              <label>Address *</label>
              <textarea name="address" onChange={handleChange}></textarea>
            </div>
          </div>
        );

      // STEP 2
      case 2:
        return (
          <div className="form-card">
            <div className="form-row">
              <div className="form-group">
                <label>Rent paid to Landlord (Yearly)</label>
                <input type="number" name="rentPaid" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Name of Landlord</label>
                <input type="text" name="landlordName" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Evidence Particulars</label>
                <input type="text" name="rentEvidence" onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Address of Landlord</label>
                <input type="text" name="landlordAddress" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>PAN of Landlord</label>
                <input type="text" name="landlordPAN" onChange={handleChange} />
              </div>
            </div>
          </div>
        );

      // STEP 3
      case 3:
        return (
          <div className="form-card">
            <div className="form-row">
              <div className="form-group">
                <label>Amount (Your total expenditure on travel)</label>
                <input type="number" name="ltcAmount" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Evidence of expenditure</label>
                <input type="text" name="ltcEvidence" onChange={handleChange} />
              </div>
            </div>
          </div>
        );

      // STEP 4
      case 4:
        return (
          <div className="form-card">
            <div className="form-row">
              <div className="form-group">
                <label>Interest payable</label>
                <input type="number" name="homeLoanInterest" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Loan Provider (Name of Individual or Organization)</label>
                <input type="text" name="lenderName" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>PAN of Lender</label>
                <input type="text" name="lenderPAN" onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Address of Loan Provider</label>
                <input type="text" name="lenderAddress" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Evidence</label>
                <input type="text" name="loanEvidence" onChange={handleChange} />
              </div>
            </div>
          </div>
        );

      // STEP 5
      case 5:
        return (
          <div className="form-card">
            <h4>1. Deductions under Sec 80C</h4>
            <div className="form-row">
              <div className="form-group">
                <label>Select</label>
                <select name="sec80CType" onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="LIC">LIC</option>
                  <option value="PF">PF</option>
                </select>
              </div>
              <div className="form-group">
                <label>Amount</label>
                <input type="number" name="sec80CAmount" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Evidence</label>
                <input type="text" name="sec80CEvidence" onChange={handleChange} />
              </div>
            </div>

            <h4>2. Other Deductions</h4>
            <div className="form-row">
              <div className="form-group">
                <label>Select</label>
                <select name="otherDeductionType" onChange={handleChange}>
                  <option value="">Select</option>
                </select>
              </div>
              <div className="form-group">
                <label>Amount</label>
                <input type="number" name="otherDeductionAmount" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Evidence</label>
                <input type="text" name="otherDeductionEvidence" onChange={handleChange} />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="form12bb-container">
      <div className="form12bb-header">
        <h1>Form 12BB</h1>
        <p>Fill out all the necessary details in the steps below</p>
      </div>

      <div className="form12bb-steps">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`step-card ${activeStep === step.id ? "active" : ""}`}
            onClick={() => setActiveStep(step.id)}
          >
            <div className="step-icon">{step.icon}</div>
            <div className="step-title">{step.title}</div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {renderStepForm()}

        <div className="form-navigation">
          {activeStep > 1 && (
            <button type="button" className="btn back" onClick={prevStep}>
              Back
            </button>
          )}
          {activeStep < steps.length ? (
            <button type="button" className="btn next" onClick={nextStep}>
              Next
            </button>
          ) : (
            <button type="submit" className="btn submit">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
