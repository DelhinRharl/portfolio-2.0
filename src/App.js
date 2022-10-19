import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Hero from './pages/Hero';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
// import Experience from './pages/Experience';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Name from './components/Name';

const App = () => (
  <div className="font-body bg-black bg-cover be bg-containt text-white">
    <BrowserRouter>
      <Navbar />
      <Hero/>
      <About/>
      <Services />
      <Projects />
      <Contact />
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
