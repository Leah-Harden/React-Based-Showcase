


import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './components/Pages/Home/Home';
import About from './components/Pages/AboutMe/AboutMe';
import Contact from './components/Pages/Contact/Contact';

import Portfolio from './components/Pages/Portfolio/Portfolio';

import './App.css'; // Import the CSS file


function App() {
  return (
    <div className='background'>
      <Home />
      <About />
      <Portfolio />
      <Contact />





      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router> */}
    </div>
  )
}

export default App;
