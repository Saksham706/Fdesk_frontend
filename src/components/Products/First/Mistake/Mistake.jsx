import React from 'react';
import './Mistake.css';

const Mistake = () => {
  return (
    <div className="mistake-container">
      <h2 className="mistake-title">Made a Mistake in Your Filed ITR? File a Revised Return</h2>

      <div className="mistake-grid">
        <div className="mistake-card">
          <div className="icon">📋</div>
          <h4>Eligibility</h4>
          <p>
            Anyone who has filed an original or belated income tax return under Section 139(1) and section 139(4) respectively
            of the Income Tax Act, 1961, can file a revised return.
          </p>
        </div>

        <div className="mistake-card">
          <div className="icon">🧾</div>
          <h4>Filing Process</h4>
          <p>
            You can file a revised return with FdeskSolutions. Just select 'Revised return' on the ITR Details page and enter the
            correct information. If tax filing feels overwhelming, our experts are just a click away to help you out.
          </p>
        </div>

        <div className="mistake-card">
          <div className="icon">✅</div>
          <h4>Reasons for filing Revised Return</h4>
          <p>
            Correction of errors, Missed Tax Deductions, Missed Income Declaration, Personal information modifications, etc.
          </p>
        </div>

        <div className="mistake-card">
          <div className="icon">🗓️</div>
          <h4>Deadline</h4>
          <p>
            File your revised return by December 31 of the relevant assessment year.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mistake;
