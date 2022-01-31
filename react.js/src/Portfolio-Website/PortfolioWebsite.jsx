import React from "react";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./PortfolioWebsite.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
function PortfolioWebsite() {
  return (
    <div className="portfolio-website">
    <Router>
    <Navbar />

      <Routes>
        <Route path="/" element={<Body />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
      </Routes>
    </Router>
      <Footer />
    </div>
  );
}

export default PortfolioWebsite;
