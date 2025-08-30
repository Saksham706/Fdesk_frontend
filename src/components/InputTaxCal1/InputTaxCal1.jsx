import React from 'react'
import './InputTaxCal1.css'

const InputTaxCal1 = () => {
 return (
    <div className="gst-section">
      <div className="gst-left">
        <h1>One Platform for All GST Services</h1>
        <h2>Quick Registration, Timely Filing, Zero Stress</h2>
        <div className="gst-icons">
          <div className="gst-icon">
            <span>⚡</span> Quick and Accurate
          </div>
          <div className="gst-icon">
            <span>👨‍💼</span> Handled by Experts
          </div>
          <div className="gst-icon">
            <span>✅</span> Compliant with GSTN & Government Portals
          </div>
        </div>
      </div>

      <div className="gst-form-card">
        <h3>Have queries?</h3>
        <form className="gst-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Mobile" />
          <textarea placeholder="Comment"></textarea>
          <button type="submit">Talk to an Expert</button>
        </form>
      </div>
    </div>
  );
}

export default InputTaxCal1
