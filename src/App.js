import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ReactLenis
        root
        options={{
          lerp: 0.1,
          duration: 3,
          smoothWheel: true,
        }}
      >
        <div className="App">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </ReactLenis>
    </Router>
  );
}

export default App;
