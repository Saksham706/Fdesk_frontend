import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom';
import Google_logo from '../../assets/Google_logo.png'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otpMode, setOtpMode] = useState(false);
  const [otp, setOtp] = useState('');
  const [isForgotFlow, setIsForgotFlow] = useState(false);

 const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/signin`, { email, password });
    localStorage.setItem('token', res.data.token);
    console.log("Login success:", res.data);
    navigate('/home');
  } catch (err) {
    const message = err.response?.data?.error || 'Login failed';
    alert(message);
  }
};

  const handleForgotPassword = async () => {
  if (!email) {
    alert('Please enter your email before requesting OTP');
    return;
  }
  try {
    await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/send-otp`, { email });
    alert('OTP has been sent to your email');
    setIsForgotFlow(true);
    setOtpMode(true);
  } catch (err) {
    const message = err.response?.data?.error || 'Failed to send OTP';
    alert(message);
  }
};

  const verifyOTP = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/verify-otp`, { email, otp });
      localStorage.setItem('token', res.data.token);
      alert('OTP verified successfully. You are now logged in.');
      navigate('/home');
    } catch (err) {
      const message = err.response?.data?.error;
      alert(message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login to FdeskSolutions Account</h2>
      <p>File your ITR online in just 4 minutes</p>

      <button
        className="google-btn"
        onClick={() => window.location.href = `${import.meta.env.VITE_API_URL}/api/auth/google`}
      >
        <img src={Google_logo} alt="google" />
        Sign in with Google
      </button>

      <div className="separator"><span>or</span></div>

      <form className="auth-form" onSubmit={otpMode ? verifyOTP : handleLogin}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {!otpMode && (
          <>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="auth-submit">Log In</button>
            <p className="forgot-password" onClick={handleForgotPassword}>Forgot Password?</p>
          </>
        )}

        {otpMode && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button type="submit" className="auth-submit">Verify OTP</button>
            <p className="forgot-password" onClick={() => setOtpMode(false)}>Back to login</p>
          </>
        )}
      </form>

      <div className="switch-auth">
        Don’t have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
