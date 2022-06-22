import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Hero from './pages/Hero';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Name from './components/Name';

const App = () => (
  <div className='font-body bg-[url("https://img.freepik.com/free-vector/abstract-memphis-background-with-circles-lines-shapes_1017-33621.jpg?t=st=1655846317~exp=1655846917~hmac=3c0d2b429052bc9360bae3506a258ce46dfc279e97379f4f24f9c824ebc6f124&w=2000")] text-white'>
    <BrowserRouter>
      <Navbar />
      <Name />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
