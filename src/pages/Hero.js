import React from 'react';
import Typed from 'react-typed';
import img from '../images/g.avif'

const Hero = () => (
  <div className="hero-main">
    <div className="hero">
      <div className="hero-text">
        <h1>Hi, I am Affaxed Kiprotich</h1>
        <p>
          I
          {' '}

          <Typed
            strings={[
              'am from Kenya.',
              'will help you build dynamic and responsive websites to suit your needs...',
            ]}
            typeSpeed={50}
            backSpeed={60}
          />
        </p>
          <div>
      <a href="https://github.com/DelhinRharl/Portfolio">
        <button type="button">Portfolio</button>
      </a>
    </div>
      </div>
      <div className="hero-image">
        <img src={img} alt="iammsdjhfb" />
      </div>
    </div>
    <div className="socials">
      <h5>Socials</h5>
      {/* <ul>
        <li>
          <a href="https://www.facebook.com/affaxed.kiprotich.3">
            <i className="fab fa-facebook-f" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/AffaxedK">
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/affaxed_kiprotich/">
            <i className="fab fa-instagram" />
          </a>
        </li>
      </ul> */}
    </div>
  </div>
);

export default Hero;
