import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Hero from './pages/Hero';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Photo from './components/Photo';
import Sidebar from './components/Sidebar';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
  <div>
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Photo />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      {/* <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
      </Routes> */}
    </BrowserRouter>
  </div>
);

export default App;
