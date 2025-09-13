import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ContactUs from '../pages/contactUs';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import HowRavueWorks from '../pages/HowitWorks';
import AnalyzePage from '../pages/AnalyzePage';
import ReviewResult from '../pages/ReviewResults';
import HeroSection from '../components/about/aboutnew';
import LoginuserPage from '../components/userlogin/userlogin';
import Faq from '../components/faq';
import LoginPage from '../components/adminlog/loginpage';
import OTPVerification from '../components/adminlog/otp';
import PasswordAssistance from '../components/adminlog/password';
import Signup from '../components/adminlog/signup';
import PasswordSetupPage from '../components/userlogin/passwordsetup';
import Dashboard from '../pages/dashboard'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/help" element={<HowRavueWorks/>}/>
       <Route path="/analyze" element={<AnalyzePage />} />
      <Route path="/review-result" element={<ReviewResult />} />
      <Route path="/" element={<LoginuserPage />} />
        <Route path="/about" element={<HeroSection />} />
        <Route path="/userlogin" element={<LoginuserPage/>} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/admin/otp" element={<OTPVerification/>} />
        <Route path="/admin/password" element={<PasswordAssistance/>} />
        <Route path="/admin/signup" element={<Signup />} />
        <Route path="/admin/set-password" element={<PasswordSetupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
    
    </Routes>
  );
};

export default AppRoutes;
