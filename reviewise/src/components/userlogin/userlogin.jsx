import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import loginimage from "../../assests/userlog.png";
import gool from "../../assests/gool.png";
import lock from "../../assests/Lock.png";
import fb from "../../assests/fb.png";
import emailIcon from "../../assests/Letter.png";

const LoginuserPage = () => {
  const navigate = useNavigate();

  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  // Styles
  const styles = {
    pageWrapper: {
      width: "100vw",
      height: "100vh",
      background: "#E8EEF1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    loginContainer: {
      width: "900px",
      height: "600px",
      display: "flex",
      boxShadow: "0 0 20px rgba(0,0,0,0.1)",
      borderRadius: "12px",
      overflow: "hidden",
      background: "#fff",
    },
    leftImage: { width: "450px", height: "600px" },
    leftImageImg: { width: "100%", height: "100%", objectFit: "cover" },
    rightForm: {
      width: "450px",
      height: "600px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(to bottom, #F2F8FF 0%, #DCEEFF 100%)",
    },
    formWrapper: { width: "80%", display: "flex", flexDirection: "column", gap: "20px" },
    headingStyle: { fontSize: "1.4em", fontWeight: 600, color: "#0A1E2F", textAlign: "center", marginTop: 0 },
    toggleSwitch: { display: "flex", justifyContent: "center", gap: "10px" },
    toggle: { padding: "10px 20px", backgroundColor: "#F2F8FF", border: "2px solid #0A1E2F", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" },
    toggleActive: { backgroundColor: "#1E3D58", color: "white" },
   inputWrapper: { 
    position: "relative", 
    width: "100%",   // full width of form wrapper
    marginBottom: "10px", 
    display: "flex", 
    flexDirection: "column"
  },
  inputField: { 
    padding: "12px 12px 12px 40px", // leave space for icon
    border: "2px solid #0A1E2F", 
    borderRadius: "8px", 
    fontSize: "1em", 
    width: "100%", 
    outline: "none", 
    backgroundColor: "#F2F8FF", 
    boxSizing: "border-box" // important to fit width inside container
  },
  inputIcon: { 
    position: "absolute", 
    left: "10px", 
    top: "50%", 
    transform: "translateY(-50%)", 
    width: "20px", 
    height: "20px", 
    pointerEvents: "none" 
  },
    linkRow: { display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.9em" },
    signUp: { color: "#007BFF", cursor: "pointer" },
    forgot: { textAlign: "right", color: "#0A1E2F", fontSize: "0.9em", cursor: "pointer" },
    loginBtn: { padding: "12px 24px", backgroundColor: "#021220", color: "white", border: "2px solid #0A1E2F", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" },
    divider: { textAlign: "center", fontSize: "0.9em", color: "#0A1E2F" },
    socialLogin: { display: "flex", justifyContent: "center", gap: "10px" },
    socialBtn: { display: "flex", alignItems: "center", gap: "8px", padding: "10px 20px", backgroundColor: "#F2F8FF", border: "2px solid #0A1E2F", borderRadius: "8px", cursor: "pointer" },
  };

  // Validation
  const validate = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handlers
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3001/api/auth/login", { email, password });

      // Save token and email in localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("email", response.data.email);
      window.dispatchEvent(new Event("storage")); 
navigate("/", { replace: true });

    } catch (err) {
      setErrors({ ...errors, password: err.response?.data?.message || "Invalid email or password" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.loginContainer}>
        <div style={styles.rightForm}>
          <div style={styles.formWrapper}>
            <h1 style={styles.headingStyle}>LOGIN</h1>

            <div style={styles.toggleSwitch}>
              <button style={styles.toggle} onClick={() => navigate("/admin/login")}>Admin</button>
              <button style={{ ...styles.toggle, ...styles.toggleActive }}>User</button>
            </div>

            <div style={styles.inputWrapper}>
              <img src={emailIcon} alt="email icon" style={styles.inputIcon} />
              <input
                type="text"
                placeholder="Enter Email Id"
                style={styles.inputField}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <div style={{ color: "red", fontSize: "0.8em" }}>{errors.email}</div>}
            </div>

            <div style={styles.inputWrapper}>
              <img src={lock} alt="lock icon" style={styles.inputIcon} />
              <input
                type="password"
                placeholder="Enter Password"
                style={styles.inputField}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <div style={{ color: "red", fontSize: "0.8em" }}>{errors.password}</div>}
            </div>

            <div style={styles.linkRow}>
              <span>
                Don’t have an account? <span style={styles.signUp} onClick={() => navigate("/admin/signup")}>Sign Up</span>
              </span>
              <span style={styles.forgot} onClick={() => navigate("/admin/password")}>Forgot Password?</span>
            </div>

            <button style={styles.loginBtn} onClick={handleLogin} disabled={loading}>
              {loading ? "Logging in..." : "LOG IN"}
            </button>

            <div style={styles.divider}>______or continue with______</div>

            <div style={styles.socialLogin}>
              <button style={styles.socialBtn} onClick={() => console.log("Google login clicked")}>
                <img src={gool} alt="Google" style={{ width: "20px" }} /> Google
              </button>
              <button style={styles.socialBtn} onClick={() => console.log("Facebook login clicked")}>
                <img src={fb} alt="Facebook" style={{ width: "20px" }} /> Facebook
              </button>
            </div>
          </div>
        </div>

        <div style={styles.leftImage}>
          <img src={loginimage} alt="Login Visual" style={styles.leftImageImg} />
        </div>
      </div>
    </div>
  );
};

export default LoginuserPage;
