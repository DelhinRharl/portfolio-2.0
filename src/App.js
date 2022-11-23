import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Hero from './pages/Hero';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Photo from './components/Photo';

const App = () => (
  <div>
    <BrowserRouter>
      <Navbar />
      <Photo />
      <Hero />
      <About />
      <Services />
      <Projects />
      {/* <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
      </Routes> */}
      {/* <Navbar /> */}
      {/* <Footer /> */}
    </BrowserRouter>
  </div>
);

export default App;
