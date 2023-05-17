
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './components/Pages/Home';
import About from './components/Pages/AboutMe';
import Contact from './components/Pages/Contact';
import Resume from './components/Pages/Resume';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Resume" element={<Resume />} />
      </Routes>
    </Router>


  )
}

export default App;
