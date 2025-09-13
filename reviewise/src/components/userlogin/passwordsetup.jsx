import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../assests/log.png";
import lockIcon from "../../assests/Lock.png";

const PasswordSetupPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || localStorage.getItem("signupEmail");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSetPassword = async () => {
    setError("");
    setSuccess("");

    if (!newPassword || !confirmPassword) {
      setError("Please fill in both fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:3001/api/auth/set-password",
        { email, newPassword }
      );

      if (response.status === 200) {
        setSuccess("Password set successfully! Redirecting to login...");
        setTimeout(() => navigate("/userlogin"), 2000);
      } else {
        setError(response.data.message || "Password setup failed.");
      }
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError(err.response?.data?.message || "Password setup failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <h2 style={styles.heading}>Set Password</h2>
        <p style={styles.subText}>Set a new password for {email}</p>

        <div style={{ width: "80%", margin: "0 auto 20px auto" }}>
  {/* New Password */}
  <div style={styles.inputWrapper}>
    <img src={lockIcon} alt="Lock Icon" style={styles.icon} />
    <input
      type="password"
      placeholder="Enter New Password"
      value={newPassword}
      onChange={(e) => setNewPassword(e.target.value)}
      style={styles.input}
    />
  </div>

  {/* Confirm Password */}
  <div style={{ ...styles.inputWrapper, marginTop: "15px" }}>
    <img src={lockIcon} alt="Lock Icon" style={styles.icon} />
    <input
      type="password"
      placeholder="Confirm New Password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      style={styles.input}
    />
  </div>
</div>

        {error && <div style={styles.error}>{error}</div>}
        {success && <div style={styles.success}>{success}</div>}

        <button
          onClick={handleSetPassword}
          disabled={loading}
          style={styles.button}
        >
          {loading ? "Setting..." : "Set Password"}
        </button>
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
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    padding: "40px",
    textAlign: "center",
  },
  logo: { width: "120px", marginBottom: "20px" },
  heading: {
    fontSize: "1.6em",
    fontWeight: "600",
    background: "linear-gradient(to right, #1E3D58, #057DCD, #43B0F1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "10px",
  },
  subText: { fontSize: "1em", color: "#333", marginBottom: "25px" },
 inputWrapper: { 
  position: "relative", 
  width: "100%", 
},
icon: {
  position: "absolute",
  left: "12px",
  top: "50%",
  transform: "translateY(-50%)",
  width: "20px",
  height: "20px",
  pointerEvents: "none",
},
input: {
  width: "100%",
  padding: "12px 12px 12px 45px", // leave space for icon
  borderRadius: "8px",
  border: "2px solid #0A1E2F",
  fontSize: "1em",
  outline: "none",
  boxSizing: "border-box",
  backgroundColor: "#fff",
},
  error: { color: "red", marginBottom: "10px" },
  success: { color: "green", marginBottom: "10px" },
  button: {
    width: "80%",
    padding: "12px",
    backgroundColor: "#0A1E2F",
    color: "#fff",
    fontWeight: "600",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    boxSizing: "border-box",
    margin: "0 auto",
    display: "block",
  },
};

export default PasswordSetupPage;
