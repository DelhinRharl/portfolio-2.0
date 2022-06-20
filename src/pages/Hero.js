import React from 'react';

const Hero = () => (
  <div className="w-full, min-h-screen bg-blue-300 flex flex-col justify-center items-center gap-12  border-b-2 border-amber-500">
    <h3 className="font-bold "> Hi,I am Affaxed </h3>
    <h1 className="text-6xl font-bold w-[40%]">I am a full stack developer based in Nairobi,Kenya</h1>
    <div className="flex gap-16">
    <button className="bg-amber-500 w-20 h-10 font-semibold " type="button">Portfolio</button>
    </div>
  </div>
);

export default Hero;
