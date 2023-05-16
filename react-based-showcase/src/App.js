
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';


import Home from './components/pages/Home';
import About from './components/pages/AboutMe';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';

function App() {
  return (

    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Resume" element={<Resume />} />

      </Routes>
    </div>


  )
}

export default App;
