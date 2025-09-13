
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './appRoutes/appRoutes';
import Navbar from './components/Navbar';
import Footer from './components/footer';


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Footer />
     
    </BrowserRouter>

  )}
export default App;

