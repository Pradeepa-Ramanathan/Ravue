const express = require('express');
const router = express.Router();
const {
  signupUser,
  loginUser,
  sendSignupOtp,
  sendResetOtp,
  verifyOtp,
  setPassword
} = require('../controllers/authController');

// Signup and login
router.post('/signup', signupUser);
router.post('/login', loginUser);

// OTP routes
router.post('/send-signup-otp', sendSignupOtp);
router.post('/send-reset-otp', sendResetOtp);
router.post('/verify-otp', verifyOtp);

// Set password after OTP
router.post('/set-password', setPassword);

module.exports = router;
