import React from 'react';
import Typed from 'react-typed';
import img from '../images/g.avif';
import About from './About';

const Hero = () => (
    <div className="hero">
      <div className="hero-text">
        <p>Hi, I am </p>
        <h1>
          Affaxed Kiprotich.
        </h1>
        <h2>
          Here to help you build the best web applications
        </h2>
        <p>
          I specialize in full-stack web development, UI/UX design as well as optimizing your websites to run smoothly
        </p>
        <div>
          <a href="https://github.com/DelhinRharl">
            <button type="button">GitHub</button>
          </a>
        </div>
      </div>
    </div>
);

export default Hero;
