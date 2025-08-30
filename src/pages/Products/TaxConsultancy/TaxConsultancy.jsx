import React, { useState } from 'react';
import './TaxConsultancy.css';
import axios from 'axios';
import TaxConsultancy1 from '../../../components/Products/8/TaxConsultancy1/TaxConsultancy1';
import TaxConsultancy2 from '../../../components/Products/8/TaxConsultancy2/TaxConsultancy2';
import TaxConsultancy3 from '../../../components/Products/8/TaxConsultancy3/TaxConsultancy3';

const TaxConsultancy = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    datetime: ''
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
      setMessageType('error');
      return;
    }

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/consultancy/enquire`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setMessage('Form submitted successfully!');
      setMessageType('success');
      setTimeout(()=> setMessage(''), 3000);
      setFormData({ name: '', email: '', mobile: '', datetime: '' });
    } catch (err) {
      if (err.response?.status === 409) {
        setMessage('You have already submitted this form.');
        setMessageType('duplicate');
        setFormData({ name: '', email: '', mobile: '', datetime: '' });
      } else {
        setMessage('Submission failed. Please try again.');
        setMessageType('error');
      }
      setTimeout(()=> setMessage(''), 3000);
      setFormData({ name: '', email: '', mobile: '', datetime: '' });
    }
  };

  return (
    <>
    <div className="consultancy-container">
      <div className="consultancy-left">
        <h1>
          Tax Consultancy & <br /><span>Advisory Services</span>
        </h1>
        <p>
          From early income tax planning and filing to notice management and optimizing tax strategies,
          we guide you every step of the way with expert support.
        </p>
      </div>

      <form className="consultancy-form" onSubmit={handleSubmit}>
        <h3>Enter your details to help us connect with you</h3>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile" required />
        <input type="datetime-local" name="datetime" value={formData.datetime} onChange={handleChange} required />
        <button type="submit">Hire a Tax Expert ➜</button>

        {message && (
          <div className={`message ${messageType}`}>
            {message}
          </div>
        )}
      </form>
    </div>
    <TaxConsultancy1/>
    <TaxConsultancy2/>
    <TaxConsultancy3/>
    </>
  );
};

export default TaxConsultancy;
