import { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import {useNavigate, Link } from 'react-router-dom';
import Google_logo from '../../assets/google_logo.png'

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSignup = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/signup`, {
      name,
      email,
      password
    });

    console.log('Signup response:', response.data);

    if (response.data.success) {
      localStorage.setItem("token", response.data.token);
      navigate('/home');
    } else {
      alert(response.data.message);
    }
  } catch (err) {
    console.error("Signup error:", err);
    alert('Signup failed');
  }
};

  return (
    <div className="auth-container">
      <h2>Create Your FdeskSolutions Account</h2>
      <p>Start filing your taxes easily</p>

      <button
        className="google-btn"
        onClick={() => window.location.href = `${import.meta.env.VITE_API_URL}/api/auth/google`}
        >
        <img src={Google_logo} alt="google" />
        Sign in with Google
        </button>


      <div className="separator">
        <span>or</span>
      </div>

      <form className="auth-form" onSubmit={handleSignup}>
        <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="auth-submit">Sign Up</button>
      </form>

      <div className="switch-auth">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </div>
  );
};

export default Signup;