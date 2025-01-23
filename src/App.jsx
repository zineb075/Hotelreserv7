import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './redux/Navbar.jsx';
import Promotions from './redux/ Promotions.jsx';
import Contact from './redux/Contact.jsx';
import Footer from './redux/ Footer.jsx';



import Register from './redux/Register.jsx';
import Login from './redux/Login.jsx';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Promotions />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />


      </Routes>
      <Footer />

    </div>
  );
}

export default App;
