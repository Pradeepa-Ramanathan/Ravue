import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';
import loginimage from "../../assests/loginimg.png";
import userIcon from "../../assests/User Male.png";
import googleIcon from "../../assests/gool.png";
import lockIcon from "../../assests/Lock.png";
import fbIcon from "../../assests/fb.png";

const LoginPage = () => {
  const navigate = useNavigate();

  // Prefill admin credentials
  const [email, setEmail] = useState('reviewise@gmail.com');
  const [password, setPassword] = useState('reviewise@28');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validate = () => {
    let valid = true;
    const newErrors = { email: '', password: '' };

    if (!email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await axios.post('http://localhost:3001/api/admin/login', {
        email,
        password,
      });

      // Save admin token & info
      localStorage.setItem('adminToken', response.data.token);
      localStorage.setItem('adminInfo', JSON.stringify({ email: response.data.email }));

      console.log('Admin logged in:', response.data);
      navigate('/home'); // Redirect to admin dashboard
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data) {
        alert(err.response.data.message);
      } else {
        alert('Login failed. Please try again.');
      }
    }
  };

  const handleSignupRedirect = () => {
    navigate('/admin/signup'); // Optional if admin signup exists
  };

  const handleForgotPassword = () => {
    navigate('/admin/password'); // Optional if password reset exists
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  return (
    <div className="page-wrapper">
      <div className="login-container">
        <div className="left-image">
          <img src={loginimage} alt="Login Visual" />
        </div>

        <div className="right-form">
          <div className="form-wrapper">
            <h1 className="login-heading">ADMIN LOGIN</h1>

            <div className="toggle-switch">
              <button className="toggle active">Admin</button>
              <button className="toggle" onClick={() => navigate('/userlogin')}>User</button>
            </div>

            <div className="input-wrapper">
              <img src={userIcon} alt="User Icon" className="input-icon" />
              <input
                type="text"
                placeholder="Enter Email"
                className="input-field-with-icon"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <div className="error-msg">{errors.email}</div>}
            </div>

            <div className="input-wrapper">
              <img src={lockIcon} alt="Lock Icon" className="input-icon" />
              <input
                type="password"
                placeholder="Enter Password"
                className="input-field-with-icon"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <div className="error-msg">{errors.password}</div>}
            </div>

            <div className="forgot" onClick={handleForgotPassword}>
              Forgot Password?
            </div>

            <button className="login-btn" onClick={handleLogin}>
              LOG IN
            </button>

            <div className="divider">or continue with</div>

            <div className="social-login">
              <button className="social-btn" onClick={handleGoogleLogin}>
                <img src={googleIcon} alt="Google" className="social-icon" />
                Google
              </button>
              <button className="social-btn">
                <img src={fbIcon} alt="Facebook" className="social-icon" />
                Facebook
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
