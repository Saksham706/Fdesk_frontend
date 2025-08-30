import React, { useState } from 'react';
import './NriTax1.css';
import axios from 'axios';

const NriTax1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    comment: '',
  });

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // success | error | duplicate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('You must be logged in to submit an enquiry.');
      setMessageType('error');
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/nri/enquire`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setMessage('Enquiry submitted successfully!');
      setMessageType('success');
       setTimeout(()=> setMessage(''), 3000);
      setFormData({
        name: '',
        email: '',
        mobile: '',
        comment: ''
      });

    } catch (err) {
      if (err.response?.status === 400 || err.response?.status === 409) {
        setMessage(err.response.data.message || 'You have already submitted an enquiry.');
        setMessageType('duplicate');
         setFormData({
        name: '',
        email: '',
        mobile: '',
        comment: ''
      });
      
      } else {
        setMessage('Submission failed. Try again.');
        setMessageType('error');
      }
       setTimeout(()=> setMessage(''), 3000);
    }
  };

  return (
    <div className="nri-container">
      <div className="nri-left">
        <h2>Filing Taxes in India as an NRI?</h2>
        <p className="subtitle">Let Us Make It Simple for You!</p>
        <p className="desc">
          Whether you're earning income from <span>property, investments, or capital gains in India</span>,
          our expert team ensures you stay compliant with Indian tax laws while optimizing your tax benefits.
        </p>

        <div className="nri-highlights">
          <p>⭐ 4.8 Google Rating</p>
          <p>✅ 1+ Million satisfied customers</p>
          <p>💰 2500 Cr. Saved Already!</p>
          <p>📈 10+ Years of Industry Experience</p>
        </div>
      </div>

      <div className="nri-form-container">
        <h3>Start Your NRI Tax Journey</h3>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" value={formData.name} required onChange={handleChange} />
          <input name="email" type="email" placeholder="Email" value={formData.email} required onChange={handleChange} />
          <input name="mobile" placeholder="Mobile" value={formData.mobile} required onChange={handleChange} />
          <textarea name="comment" placeholder="Comment" value={formData.comment} onChange={handleChange} />
          <button type="submit">Connect with Tax Experts</button>
        </form>

        {message && (
          <div className={`message ${messageType}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default NriTax1;
