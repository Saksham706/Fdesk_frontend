import React, { useState } from 'react';
import './Incometaxgain1.css';
import axios from 'axios';

const Incometaxgain1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token'); 

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/incometaxnotice`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setMessage(res.data.message);
      setMessageType('success');
      setTimeout(()=> setMessage(''), 3000)
      setFormData({ name: '', email: '', mobile: '' });
    } catch (error) {
      setMessage(error.response?.data?.message || 'Submission failed');
      setTimeout(()=> setMessage(''), 3000)
      setFormData({ name: '', email: '', mobile: ''});
      setMessageType('error');
    }
  };

  return (
    <div className="notice-container">
      <div className="notice-left">
        <h1>Income Tax Notice: Check & Authenticate ITR Notices Online</h1>
        <p>
          An income tax notice is a written communication sent by the Income Tax Department to a taxpayer
          alerting them to an issue with their tax account. Notices can be sent for filing issues, assessments,
          document requests, etc.
        </p>
        <ul className="notice-badges">
          <li>📩 5500+ Notices Resolved</li>
          <li>✅ Trusted by 1 Million+</li>
          <li>🔐 Secure & Safe</li>
        </ul>
      </div>

      <div className="notice-form">
        <h3>Got Income Tax Notice?</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
          <input type="tel" name="mobile" placeholder="Mobile" required value={formData.mobile} onChange={handleChange} />
          <button type="submit">Contact Now</button>
        </form>
        {message && (
          <p style={{ color: messageType === 'success' ? 'green' : 'red', marginTop: '10px' }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Incometaxgain1;
