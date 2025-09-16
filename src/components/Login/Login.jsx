import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        { email, password }
      );
      localStorage.setItem('token', res.data.token);
      navigate('/home');
    } catch (err) {
      const message = err.response?.data?.message || 'Login failed';
      alert(message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login to FdeskSolutions Account</h2>
      <p>File your ITR online in just 4 minutes</p>
      <form className="auth-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="auth-submit">Log In</button>
      </form>
      <div className="switch-auth">
        Don’t have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
