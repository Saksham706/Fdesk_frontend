import React, { useState } from 'react';
import './HireCA.css';
import axios from 'axios';

const HireCA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async () => {
  if (!formData.name || !formData.email || !formData.mobile) {
    setError('All fields are required');
    return;
  }

  const token = localStorage.getItem('token');

  try {
    await axios.post(
      `${import.meta.env.VITE_API_URL}/api/ca-assist/submitRequest`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );


    setFormData({
      name: '',
      email: '',
      mobile: ''
    });

    setSuccess('CA will contact you shortly!');
    setTimeout(()=> setSuccess(''), 3000);
    setFormData({ name: '', email:'', mobile:''})
    setError('');
  } catch (err) {
    if (err.response?.data?.message === 'You have already Submitted a request') {
      setError('You have already submitted a request.');
      setTimeout(()=> setError(''), 3000)
    } else if (err.response?.status === 401) {
      setError('Please login to continue.');
    } else {
      setError('Something went wrong. Please try again.');
    }
    setTimeout(()=> setError(''), 3000);
    setFormData({ name: '', email:'', mobile:''})
  }
};



  return (
    <div className="hireca-wrapper">
      <div className="hireca-container">
        {/* Left Text */}
        <div className="left-text">
          <h1>
            Top Online CA Consultants for<br />
            <span className="highlight">ITR Filing Services in India</span>
          </h1>
          <div className="rating">
            <span className="stars">★ 4.8</span>
            <span className="votes">15478 ratings</span>
          </div>
          <ul>
            <li>✅ Lowest Tax Filing Fees in India</li>
            <li>✅ Reliable and Secure ITR Filing Platform</li>
            <li>✅ Tax Filing for all - Freelancers, NRI, Business Owners, Salaried Persons</li>
            <li>✅ Missed the Deadline or Made a Mistake? File Belated, Revised, or Updated ITR (ITR-U)</li>
          </ul>
        </div>

        {/* Right Form */}
        <div className="form-boxs">
          <h3>ITR Details</h3>
          <input
            type="text"
            placeholder="Your Name"
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
            placeholder="Mobile Number"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
          <p className="terms">
            By submitting the form, you agree to our <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
          </p>
          <button className="book-btn" onClick={handleSubmit}>Book eCA Now →</button>
        </div>
      </div>
    </div>
  );
};

export default HireCA;
