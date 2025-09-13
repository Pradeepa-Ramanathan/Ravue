// server/scripts/addAdmin.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('../models/admin');
const bcrypt = require('bcryptjs');

dotenv.config();

const addAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: 'reviewise@gmail.com' });
    if (existingAdmin) {
      console.log('Admin already exists');
      process.exit(0);
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash('reviewise@28', 10);

    // Create the admin
    const admin = new Admin({
      email: 'reviewise06@gmail.com',
      password: hashedPassword,
    });

    await admin.save();
    console.log('Admin created successfully');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

addAdmin();
