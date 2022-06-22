import React from 'react';

const Hero = () => (
  <div className="w-full, h-[79vh] flex flex-col justify-center items-center gap-12 font-body">
    <h3 className="font-bold text-4xl text-amber-600 "> Hi,I am Affaxed </h3>
    <h1 className="text-6xl font-bold w-[40%]">I am a full stack developer based in Kenya</h1>
    <div className="flex gap-16">
      <a href="https://github.com/DelhinRharl/Portfolio">
        <button className="bg-amber-600 text-black rounded-md w-20 h-10 font-semibold hover:text-white hover:w-24 hover:h-10" type="button">Portfolio</button>
      </a>
    </div>
  </div>
);

export default Hero;
