import React from 'react';
import './Form16VerificationCheck.css';

function Form16VerificationCheck({ status, onAnalyze }) {
  return (
    <div className="verification-check-container">
      <h3 className="verification-status">
        Verification Status: <span className="status-text">{status || 'Not Verified'}</span>
      </h3>
      <button className="analyze-button" onClick={onAnalyze}>
        Analyze / Verify Form 16
      </button>
    </div>
  );
}

export default Form16VerificationCheck;
