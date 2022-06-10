import React from 'react';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Services />
    <Projects />
    <Footer />
  </div>
);

export default App;
