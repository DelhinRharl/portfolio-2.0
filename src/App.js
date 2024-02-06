import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Hero from './pages/Hero';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Photo from './components/Photo';
import Sidebar from './components/Sidebar';
// import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
  <div className="main-container">
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Footer />
      </div>
      {/* Divider */}
      <div className="divider"></div>
      {/* Photo Component */}
      <div className="photo">
        <Photo />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
