import React, { useState } from 'react';
import './Form16Upload.css'
function Form16Upload({ onFileUpload }) {
  const [form, setForm] = useState({
    employer: { name: '', address: '', pan: '', tan: '' },
    employee: { name: '', address: '', pan: '' },
    period: '',
    salary: { basic: 0, hra: 0, allowances: 0, perquisites: 0, otherAllowances: 0 },
    deductions: { section80C: 0, section80D: 0, section80G: 0, section80TTA: 0, otherDeductions: 0 },
    tdsSummary: [{ quarter: '', tdsPaid: 0 }],
    taxRegime: '',
  });

  const handleChange = (e, parentKey, key) => {
    if (parentKey) {
      setForm({
        ...form,
        [parentKey]: { ...form[parentKey], [key]: e.target.value },
      });
    } else {
      setForm({ ...form, [key]: e.target.value });
    }
  };

  // For simplicity, only one TDS entry input here
  const handleTdsChange = (e, index, key) => {
    const newTds = [...form.tdsSummary];
    newTds[index][key] = e.target.value;
    setForm({ ...form, tdsSummary: newTds });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert numeric string inputs to numbers
    const sanitize = (obj) =>
      Object.fromEntries(
        Object.entries(obj).map(([k, v]) => [k, isNaN(v) ? v : Number(v)])
      );

    const cleanedForm = {
      ...form,
      employer: sanitize(form.employer),
      employee: sanitize(form.employee),
      salary: sanitize(form.salary),
      deductions: sanitize(form.deductions),
      tdsSummary: form.tdsSummary.map((item) => ({
        quarter: item.quarter,
        tdsPaid: Number(item.tdsPaid) || 0,
      })),
    };

    onFileUpload(cleanedForm);
  };

  return (
    <div className="form16-page-wrapper">
    <form onSubmit={handleSubmit} className="form16-upload-form" style={{ marginBottom: 20 }}>
  {/* ...other parts unchanged... */}

  <fieldset>
    <legend>Employer Details</legend>
    <div className="input-row">
      <input
        placeholder="Name"
        value={form.employer.name}
        onChange={(e) => handleChange(e, 'employer', 'name')}
        required
      />
      <input
        placeholder="Address"
        value={form.employer.address}
        onChange={(e) => handleChange(e, 'employer', 'address')}
        required
      />
      <input
        placeholder="PAN"
        value={form.employer.pan}
        onChange={(e) => handleChange(e, 'employer', 'pan')}
        required
      />
    </div>
    <input
      placeholder="TAN"
      value={form.employer.tan}
      onChange={(e) => handleChange(e, 'employer', 'tan')}
    />
  </fieldset>

  <fieldset>
    <legend>Employee Details</legend>
    <div className="input-row">
      <input
        placeholder="Name"
        value={form.employee.name}
        onChange={(e) => handleChange(e, 'employee', 'name')}
        required
      />
      <input
        placeholder="Address"
        value={form.employee.address}
        onChange={(e) => handleChange(e, 'employee', 'address')}
        required
      />
      <input
        placeholder="PAN"
        value={form.employee.pan}
        onChange={(e) => handleChange(e, 'employee', 'pan')}
        required
      />
    </div>
  </fieldset>

  {/* Similarly for Salary */}
  <fieldset>
    <legend>Salary Details</legend>
    <div className="input-row">
      <input
        type="number"
        placeholder="Basic"
        value={form.salary.basic}
        onChange={(e) => handleChange(e, 'salary', 'basic')}
        required
      />
      <input
        type="number"
        placeholder="HRA"
        value={form.salary.hra}
        onChange={(e) => handleChange(e, 'salary', 'hra')}
      />
      <input
        type="number"
        placeholder="Allowances"
        value={form.salary.allowances}
        onChange={(e) => handleChange(e, 'salary', 'allowances')}
      />
    </div>
    <input
      type="number"
      placeholder="Perquisites"
      value={form.salary.perquisites}
      onChange={(e) => handleChange(e, 'salary', 'perquisites')}
    />
  </fieldset>

  {/* Similarly for Deductions */}
  <fieldset>
    <legend>Deductions</legend>
    <div className="input-row">
      <input
        type="number"
        placeholder="Section 80C"
        value={form.deductions.section80C}
        onChange={(e) => handleChange(e, 'deductions', 'section80C')}
      />
      <input
        type="number"
        placeholder="Section 80D"
        value={form.deductions.section80D}
        onChange={(e) => handleChange(e, 'deductions', 'section80D')}
      />
      <input
        type="number"
        placeholder="Section 80G"
        value={form.deductions.section80G}
        onChange={(e) => handleChange(e, 'deductions', 'section80G')}
      />
    </div>
    <div className="input-row">
      <input
        type="number"
        placeholder="Section 80TTA"
        value={form.deductions.section80TTA}
        onChange={(e) => handleChange(e, 'deductions', 'section80TTA')}
      />
      <input
        type="number"
        placeholder="Other Deductions"
        value={form.deductions.otherDeductions}
        onChange={(e) => handleChange(e, 'deductions', 'otherDeductions')}
      />
    </div>
  </fieldset>

  {/* For TDS Summary inputs */}
  <fieldset>
    <legend>TDS Summary</legend>
    <div className="input-row">
      <input
        placeholder="Quarter (e.g. Q1)"
        value={form.tdsSummary[0].quarter}
        onChange={(e) => handleTdsChange(e, 0, 'quarter')}
      />
      <input
        type="number"
        placeholder="TDS Paid"
        value={form.tdsSummary[0].tdsPaid}
        onChange={(e) => handleTdsChange(e, 0, 'tdsPaid')}
      />
    </div>
  </fieldset>

  <input
    placeholder="Tax Regime"
    value={form.taxRegime}
    onChange={(e) => handleChange(e, null, 'taxRegime')}
  />

  <br />
  <button type="submit" style={{ marginTop: 10 }}>
    Upload Form 16 Data
  </button>
    </form>
    </div>

  );
}

export default Form16Upload;
