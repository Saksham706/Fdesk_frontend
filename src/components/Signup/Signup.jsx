import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/signup`,
        { name, email, password }
      );
      localStorage.setItem('token', res.data.token);
      navigate('/home');
    } catch (err) {
      const message = err.response?.data?.message || 'Signup failed';
      alert(message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Create Your FdeskSolutions Account</h2>
      <p>Start filing your taxes easily</p>

      <form className="auth-form" onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="auth-submit">Sign Up</button>
      </form>
      <div className="switch-auth">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </div>
  );
};

export default Signup;
