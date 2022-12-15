import React from 'react';

const longText1 = 'I create styish and sophisticated websites to suit your needs using the latest technologies; as well as offer other web related services.';

const Hero = () => (
  <div className="hero">
    <div className="hero-text">
      <h5>
        INTRODUCTION
      </h5>
      <h2>
        Web Developer
      </h2>
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
