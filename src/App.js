import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import UCSP from './components/UCSP';
import Footer from './components/Footer';
import Group1 from './components/Group1';
import Group2 from './components/Group2';
import Group3 from './components/Group3';
import Group4 from './components/Group4';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ucsp" element={<UCSP />} />
          <Route path="/group1" element={<Group1 />} />
          <Route path="/group2" element={<Group2 />} />
          <Route path="/group3" element={<Group3 />} />
          <Route path="/group4" element={<Group4 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
