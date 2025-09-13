import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from "../../assests/log.png";
import emailIcon from "../../assests/Letter.png";

const PasswordAssistance = () => {
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

  // Handle sending reset OTP
  const handleSendOTP = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) return;

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3001/api/auth/send-reset-otp', { email });

      if (response.status === 200) {
        localStorage.setItem('resetEmail', email); // Save email for OTP verification
        navigate('/admin/otp'); // Navigate to OTP page
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    pageWrapper: {
      width: "100vw",
      height: "100vh",
      background: "linear-gradient(to right, #f0f8ff, #dceeff)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    card: {
      width: "420px",
      height: "460px",
      background: "#E8EEF1",
      borderRadius: "16px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      padding: "40px",
      textAlign: "center",
    },
    logo: {
      width: "120px",
      marginBottom: "20px",
    },
    heading: {
      fontSize: "1.6em",
      fontWeight: "600",
      background: "linear-gradient(to right, #1E3D58, #057DCD, #43B0F1)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      marginBottom: "10px",
    },
    description: {
      fontSize: "1em",
      color: "#333",
      marginBottom: "25px",
    },
    inputWrapper: {
      position: "relative",
      width: "80%",
      margin: "0 auto 20px auto",
    },
    inputIcon: {
      position: "absolute",
      left: "14px",
      top: "50%",
      transform: "translateY(-50%)",
      width: "20px",
      height: "20px",
      pointerEvents: "none",
    },
    inputField: {
      width: "100%",
      padding: "12px 12px 12px 45px",
      borderRadius: "8px",
      border: "2px solid #0A1E2F",
      fontSize: "1em",
      outline: "none",
      boxSizing: "border-box",
    },
    buttonWrapper: {
      width: "80%",
      margin: "0 auto",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#0A1E2F",
      color: "#fff",
      fontWeight: "600",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      boxSizing: "border-box",
    },
    errorText: {
      color: "red",
      fontSize: "0.9em",
      marginBottom: "10px",
    },
  };

 return (
    <div style={styles.pageWrapper}>
      <div style={styles.card}>
        <img src={logo} alt="Ravue Logo" style={styles.logo} />
        <h2 style={styles.heading}>Password assistance</h2>
        <p style={styles.description}>
          Enter the email address associated with your Ravue account.
        </p>

        <div style={styles.inputWrapper}>
          <img src={emailIcon} alt="Email Icon" style={styles.inputIcon} />
          <input
            type="email"
            placeholder="Enter Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.inputField}
          />
        </div>

        {error && <p style={styles.errorText}>{error}</p>}

        <div style={styles.buttonWrapper}>
          <button style={styles.button} onClick={handleSendOTP}>
            SEND OTP
          </button>
        </div>
      </div>
    </div>
  );
};


export default PasswordAssistance;
