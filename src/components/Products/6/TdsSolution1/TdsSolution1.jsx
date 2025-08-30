import React, { useState } from 'react';
import './TdsSolution1.css';
import axios from 'axios';

const TdsSolution1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setMessageType('');

    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/tds/enquire`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setMessage(res.data.message);
      setMessageType('success');
      setTimeout(() => setMessage(''), 3000);
      setFormData({ name: '', email: '', mobile: '' });
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Submission failed. Try again.';
      setMessage(errorMsg);
      setMessageType('error');
      setFormData({ name: '', email: '', mobile: '' });
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <div className="tds-container">
      <div className="tds-wrapper">
        <h2>TDS2WIN : Cloud Based e-TDS Solution</h2>
        <p>File your quarterly TDS returns and generate Form 16/16A</p>

        <div className="tds-box">
          <div className="tds-info">
            <h3>e-TDS Return Filing with TDS2WIN</h3>
            <p>
              TDS compliance is a time-consuming process. TDS2WIN is a cloud-based solution...
            </p>
            <ul>
              <li>Access Anywhere, Anytime!</li>
              <li>No software installation required</li>
              <li>No limit on line items</li>
              <li>Safe and Secure 128-bit SSL</li>
            </ul>
          </div>

          <form className="tds-form" onSubmit={handleSubmit}>
            <h4>ITR Details</h4>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile No."
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <button type="submit">ENQUIRE NOW</button>
            {message && <div className={`message ${messageType}`}>{message}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default TdsSolution1;
