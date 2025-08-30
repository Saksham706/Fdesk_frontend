import React, { useState } from 'react';
import Form16Upload from '../../../components/Products/Secound/Form16Upload/Form16Upload';
import Form16Summary from '../../../components/Products/Secound/Form16Summary/Form16Summary';
import Form16Breakdown from '../../../components/Products/Secound/Form16Breakdown/Form16Breakdown';
import Form16VerificationCheck from '../../../components/Products/Secound/Form16VerificationCheck/Form16VerificationCheck';
import Form16MismatchAlert from '../../../components/Products/Secound/Form16MismatchAlert/Form16MismatchAlert';
import './Form16.css'
const Form16 = () => {
  const [form16, setForm16] = useState(null);
  const [mismatch, setMismatch] = useState([]);

  // Upload form16 JSON data to backend
  const handleUpload = async (formData) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/form16/upload`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setForm16(data);
      setMismatch([]); // reset mismatch on new upload
    } catch (error) {
      alert('Failed to upload Form 16 data');
    }
  };

  // Request backend to analyze form16 and detect mismatches
  const handleAnalyze = async () => {
    if (!form16 || !form16._id) {
      alert('Please upload Form16 data first!');
      return;
    }
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/form16/analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form16),
      });
      const { status, mismatches } = await res.json();
      setForm16((prev) => ({ ...prev, verificationStatus: status }));
      setMismatch(mismatches);
    } catch (error) {
      alert('Error analyzing Form 16');
    }
  };

  return (
    <div className="form16-container">
      <h1>Form 16 Analysis</h1>
      <Form16Upload onFileUpload={handleUpload} />
      {form16 && (
        <>
          <Form16Summary details={form16} />
          <Form16Breakdown salary={form16.salary} deductions={form16.deductions} tds={form16.tdsSummary} />
          <Form16VerificationCheck status={form16.verificationStatus} onAnalyze={handleAnalyze} />
          <Form16MismatchAlert mismatchDetails={mismatch} />
        </>
      )}
    </div>
  );
};

export default Form16;
