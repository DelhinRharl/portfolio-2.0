import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contacts" element={<Contact />} />
    </Routes>
  </div>
);

export default App;
