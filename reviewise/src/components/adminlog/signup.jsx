import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';
import loginImage from '../../assests/loginimg.png';
import googleIcon from '../../assests/gool.png';
import fbIcon from '../../assests/fb.png';
import emailIcon from '../../assests/Letter.png';

const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Validate email format
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) { setError('Email is required'); return false; }
    if (!regex.test(email)) { setError('Please enter a valid email'); return false; }
    setError('');
    return true;
  };

  // Handle sending OTP
  const handleSendOTP = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) return;

    try {
      setLoading(true);
      // Call backend route for sending signup OTP
      const response = await axios.post('http://localhost:3001/api/auth/send-signup-otp', { email });

      if (response.status === 200) {
        localStorage.setItem('signupEmail', email); // Save email for OTP verification
        navigate('/admin/otp'); // Go to OTP page
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="login-container">
        <div className="left-image">
          <img src={loginImage} alt="Login Visual" />
        </div>

        <div className="right-form">
          <div className="form-wrapper">
            <h1 className="login-heading">SIGN UP</h1>

            <div className="input-wrapper">
              <img src={emailIcon} alt="Email Icon" className="input-icon" />
              <input
                type="email"
                placeholder="Enter your email"
                className="input-field-with-icon"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

           {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

            <button className="login-btn" onClick={handleSendOTP} disabled={loading}>
              {loading ? 'Sending OTP...' : 'SEND OTP'}
            </button>

            <div className="divider">________ or continue with ________</div>

            <div className="social-login">
              <button className="social-btn">
                <img src={googleIcon} alt="Google" className="social-icon" /> Google
              </button>
              <button className="social-btn">
                <img src={fbIcon} alt="Facebook" className="social-icon" /> Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
