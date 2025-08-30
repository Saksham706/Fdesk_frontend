import React from 'react';
import './Form16MismatchAlert.css';

function Form16MismatchAlert({ mismatchDetails }) {
  if (!mismatchDetails || mismatchDetails.length === 0) return null;
  return (
    <div className="mismatch-alert-container">
      <h3 className="mismatch-alert-title">Mismatches Detected:</h3>
      <ul className="mismatch-alert-list">
        {mismatchDetails.map((detail, idx) => (
          <li className="mismatch-alert-item" key={idx}>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Form16MismatchAlert;
