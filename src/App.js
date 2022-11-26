import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';

import Navbar from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Features from "./pages/Features";
import OurClients from "./pages/OurClients";
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';





const App = () => {

  return (

    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Features" element={<Features/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/ourclients" element={<OurClients/>} />

    </Routes>
    <Footer/>
    </Router>
  
  )
}

export default App
