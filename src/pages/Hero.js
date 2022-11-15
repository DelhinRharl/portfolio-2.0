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
      {/* <div className="hero-btns">
        <a href="https://github.com/DelhinRharl">
          <button type="button">Find out more!</button>
        </a>
        <a href="https://docs.google.com/document/d/19pVS_0LzVRiFRqxSuZgcpXu9yhSraHKdkBwn-9uJtHo/edit?usp=sharing">
          <button type="button">Resume</button>
        </a>
      </div> */}
      <div>
        <p>Affaxed Kiprotich</p>
      </div>
    </div>
  </div>
);

export default Hero;
