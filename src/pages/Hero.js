import React from 'react';

const longText1 = 'I create styish and sophisticated websites to suit your needs using the latest technologies; as well as offer other web related services.';

const Hero = () => (
  <div className="hero">
    <div className="hero-text">
      <p> </p>
      <h3>
        Web Developer
      </h3>
      <p>
        {longText1}
      </p>
      <div>
        <p>Affaxed Kiprotich</p>
      </div>
    </div>
  </div>
);

export default Hero;
