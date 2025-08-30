import React, { useState } from 'react';
import './GST1.css';
import axios from 'axios';

const GST1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    comment: ''
  });

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

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
        `${import.meta.env.VITE_API_URL}/api/gst/submit`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setFormData({ name: '', email: '', mobile: '', comment: '' });
      setMessage('GST enquiry submitted successfully!');
      setMessageType('success');
      setFormData({ name: '', email: '', mobile: '', comment: '' });
      setTimeout(() => setMessage(''), 3000);
    } catch (err) {
      if (err.response?.data?.message === 'You have already submitted an enquiry') {
        setMessage('You have already submitted an enquiry.');
        setMessageType('error');
        setFormData({ name: '', email: '', mobile: '', comment: '' });
        setTimeout(() => setMessage(''), 3000);
      } else if (err.response?.status === 401) {
        setMessage('Please login to continue.');
        setMessageType('error');
      } else {
        setMessage('Something went wrong. Please try again.');
        setMessageType('error');
      }
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <div className="gst-section">
      <div className="gst-left">
        <h1>One Platform for All GST Services</h1>
        <h2>Quick Registration, Timely Filing, Zero Stress</h2>
        <div className="gst-icons">
          <div className="gst-icon"><span>⚡</span> Quick and Accurate</div>
          <div className="gst-icon"><span>👨‍💼</span> Handled by Experts</div>
          <div className="gst-icon"><span>✅</span> Compliant with GSTN & Government Portals</div>
        </div>
      </div>

      <div className="gst-form-card">
        <h3>Have queries?</h3>
        <form className="gst-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            placeholder="Mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          <textarea
            placeholder="Comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
          ></textarea>

          {message && (
            <p className={messageType === 'success' ? 'success' : 'error'}>
              {message}
            </p>
          )}
          <button type="submit">Talk to an Expert</button>
        </form>
      </div>
    </div>
  );
};

export default GST1;
