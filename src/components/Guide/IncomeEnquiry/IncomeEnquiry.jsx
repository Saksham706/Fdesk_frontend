import React, { useState } from 'react';
import './IncomeEnquiry.css';
import axios from 'axios';

const IncomeEnquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
  });

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, mobile } = formData;

    if (!name || !email || !mobile) {
      setMessage('All fields are required');
      setMessageType('error');
      return;
    }

    const token = localStorage.getItem('token');

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/income-enquiry/submit`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setFormData({ name: '', email: '', mobile: '' });
      setMessage('Enquiry submitted successfully!');
      setMessageType('success');
      setFormData({ name: '', email: '', mobile: '' });
      setTimeout(() => setMessage(''), 3000);
    } catch (err) {
      if (err.response?.data?.message === 'You have already submitted an enquiry') {
        setMessage('You have already submitted an enquiry.');
        setFormData({ name: '', email: '', mobile: '' });
      } else if (err.response?.status === 401) {
      } else {
        setMessage('Something went wrong. Please try again.');
        
      }
      setMessageType('error');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <div className="gst-section">
      <div className="gst-left">
        <h1>Income Tax Filing Made Easy</h1>
        <h2>File Now and Claim Early Refund</h2>
        <div className="gst-icons">
          <div className="gst-icon"><span>⚡</span> Fast & Accurate</div>
          <div className="gst-icon"><span>👨‍💼</span> Expert Help</div>
          <div className="gst-icon"><span>✅</span> Govt Compliant</div>
        </div>
      </div>

      <div className="gst-form-card">
        <h3>Start Filing</h3>
        <form className="gst-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <input type="tel" name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} />
          {message && (
            <p className={messageType === 'success' ? 'success' : 'error'}>{message}</p>
          )}
          <button type="submit">File ITR Now</button>
        </form>
      </div>
    </div>
  );
};

export default IncomeEnquiry;
