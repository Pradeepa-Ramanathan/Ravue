// server/routes/adminRoutes.js
const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  // Trim spaces and normalize email
  const email = req.body.email?.trim().toLowerCase();
  const password = req.body.password?.trim();

  if (email === 'reviewise@gmail.com' && password === 'reviewise@28') {
    return res.json({ token: 'admin123token', email });
  } else {
    return res.status(401).json({ message: 'Invalid admin credentials' });
  }
});

module.exports = router;
