import React from 'react';
import Typed from 'react-typed';

const Hero = () => (
  <div className="hero-main">
    <div className="hero">
      <div className="hero-text">
        <h1>Hi, I am Affaxed Kiprotich</h1>
        <p>I {''}
        <Typed 
          strings={[
           'am from Kenya',
            'build dynamic and responsive websites to suit your needs',
          ]}
          typeSpeed={50}
          backSpeed={60}
        />
        </p>
      </div>
      <div className="hero-image">
        <img src="" alt="iammsdjhfb" />
      </div>
    </div>
    <div>
      <a href="https://github.com/DelhinRharl/Portfolio">
        <button type="button">Portfolio</button>
      </a>
    </div>
  </div>
);

export default Hero;
