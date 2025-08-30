import React, { useState } from 'react';
import './Capitalgaintax1.css';
import axios from 'axios';

const Capitalgaintax1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    comment: '',
  });

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!token) {
      setMessage('Please log in to submit the form.');
      setMessageType('warning');
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/capitalgain`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(response.data.message || 'Form submitted successfully!');
      setTimeout(()=> setMessage(''), 3000)
      setMessageType('success');
      setFormData({
        name: '',
        email: '',
        mobile: '',
        comment: '',
      });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setMessage(error.response.data.message || 'You have already submitted the form.');
      } else {
        setMessage('Submission failed. Please try again.');
      }
      setTimeout(()=> setMessage(''), 3000)
      setMessageType('error');
      setFormData({
        name: '',
        email: '',
        mobile: '',
        comment: '',
      });
    }
  };

  return (
    <div className="capitalgain-container">
      <div className="capitalgain-left">
        <h2>
          <span>
            Maximize Your <span className="highlight">Gain</span>, Minimize Your Taxes
          </span>
        </h2>
        <h1>Expert Assisted Capital Gains Filing</h1>
        <p>
          Whether you've sold <span className="green">property, shares, mutual funds, bonds, gold or any other asset</span>, 
          we’re here to help you keep more of what you earn.
        </p>
        <ul className="stats">
          <li>⭐ 4.8 Google Rating</li>
          <li>💰 2500 Cr. Saved Already</li>
          <li>✅ 1+ Million Customers</li>
          <li>📅 10+ Years Experience</li>
        </ul>
      </div>

      <div className="capitalgain-form">
        <h3>Looking for Tax Help?</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            required
            onChange={handleChange}
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile"
            value={formData.mobile}
            required
            onChange={handleChange}
          />
          <textarea
            name="comment"
            placeholder="Comment"
            rows="3"
            value={formData.comment}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Connect with Tax Experts</button>
        </form>

        {/* Display message */}
        {message && (
          <div className={`message ${messageType}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Capitalgaintax1;
