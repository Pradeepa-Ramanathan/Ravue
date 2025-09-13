import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../assests/log.png";
import emailIcon from "../../assests/Letter.png";

const OTPVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Get email for OTP verification
  const signupEmail = localStorage.getItem("signupEmail");
  const resetEmail = localStorage.getItem("resetEmail");
  const email = signupEmail || resetEmail;

  // Confirm OTP
  const handleConfirmOTP = async () => {
    if (!email) {
      setError("Email not found. Please start again.");
      return;
    }
    if (!otp || otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3001/api/auth/verify-otp", {
        email,
        otp,
      });

      if (response.status === 200) {
        // Navigate to Set Password page
        navigate("/admin/set-password", { state: { email } });
      } else {
        setError(response.data.message || "Invalid OTP. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Invalid OTP or OTP expired.");
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP
  const handleResendOTP = async () => {
    if (!email) {
      setError("Email not found. Please start again.");
      return;
    }

    try {
      setLoading(true);
      const url = signupEmail
        ? "http://localhost:3001/api/auth/send-signup-otp"
        : "http://localhost:3001/api/auth/send-reset-otp";

      await axios.post(url, { email });
      alert("OTP resent successfully!");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to resend OTP. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <h2 style={styles.heading}>OTP Verification</h2>
        <p style={styles.subText}>Enter the 6-digit OTP sent to your email</p>

        <div style={styles.inputWrapper}>
          <img src={emailIcon} alt="Email Icon" style={styles.icon} />
          <input
            type="text"
            placeholder="Enter OTP"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/, ""))} // digits only
            style={styles.input}
          />
        </div>

        {error && <div style={styles.error}>{error}</div>}

        <button onClick={handleConfirmOTP} disabled={loading} style={styles.button}>
          {loading ? "Verifying..." : "Confirm"}
        </button>

        <p style={styles.resendText}>
          OTP not received?
          <span onClick={handleResendOTP} style={styles.resendLink}>
            Resend OTP
          </span>
        </p>
      </div>
    </div>
  );
};


const styles = {
  pageWrapper: {
    width: "100vw",
    height: "100vh",
    background: "linear-gradient(to right, #f0f8ff, #dceeff)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "420px",
    background: "#E8EEF1",
    borderRadius: "16px",
    padding: "40px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
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
  subText: {
    fontSize: "1em",
    color: "#333",
    marginBottom: "25px",
  },
  inputWrapper: {
    position: "relative",
    width: "80%",
    margin: "0 auto 20px auto",
  },
  icon: {
    position: "absolute",
    left: "14px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "20px",
    height: "20px",
  },
  input: {
    width: "100%",
    padding: "12px 12px 12px 45px",
    borderRadius: "8px",
    border: "2px solid #0A1E2F",
    fontSize: "1em",
    outline: "none",
    boxSizing: "border-box",
  },
  error: {
    color: "red",
    marginBottom: "10px",
  },
  button: {
    width: "80%",
    padding: "12px",
    backgroundColor: "#0A1E2F",
    color: "#fff",
    fontWeight: "600",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    margin: "0 auto 15px auto",
    display: "block",
  },
  resendText: {
    fontSize: "0.9em",
    color: "#333",
  },
  resendLink: {
    color: "#057DCD",
    textDecoration: "underline",
    cursor: "pointer",
    marginLeft: "6px",
  },
};

export default OTPVerification;
