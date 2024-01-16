import React from 'react';
import Photo from '../components/Photo';

const longText1 = 'I create styish and sophisticated websites to suit your needs using the latest technologies; as well as offer other web related services.';

const Hero = () => (
  <section className="hero-section">
    <div className="photo">
      <Photo />
    </div>
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
