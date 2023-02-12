import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const hamburger = <FontAwesomeIcon icon="fa-solid fa-coffee" size="lg" />;

const longText1 = 'I create styish and sophisticated websites to suit your needs using the latest technologies; as well as offer other web related services.';

const Hero = () => (
  <section className="hero-section">
    <div className="hero-text">
      <h5>
        Introduction
      </h5>
      <h2>
        Web Developer
      </h2>
      <p>
        {longText1}
      </p>
      <span>
        <p>Affaxed Kiprotich</p>
      </span>
    </div>
  </section>
);

export default Hero;
