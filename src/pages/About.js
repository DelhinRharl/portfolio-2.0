import React from 'react';

const About = () => (
  <div className="pl-20 pt-10 gap-7 flex flex-col items-center  h-[84vh] text-xl">
    <h2 className="text-4xl font-bold text-amber-600">
      {' '}
      About Me
      <p className="w-10 h-10 bg-amber-600 rounded-full  absolute top-24  left-17 -z-10 " />
    </h2>
    <h1 className="text-2xl font-extrabold">
      Hello there. I am Affaxed Kiprotich
    </h1>
    <p className="w-[50%]">
      I am a full-stack web developer from Kenya. I have technical skills in HTML, CSS,
      {' '}
      <br />
      {' '}
      JavaScript, React, Ruby,Ruby on Rails  and Postgresql.
      {' '}
      <br />
      {' '}
      I have a passion for building beautiful, responsive websites.
    </p>
    <div>
      <ul className="flex flex-col gap-6">
        <li>
          <p className="font-bold text-amber-600">
            <strong>Web Development</strong>
          </p>
          <p>
            I am a full stack web developer with a passion for building beautiful React websites.
          </p>
        </li>
        <li>
          <p className="font-bold text-amber-600">
            {' '}
            <strong>Web Design</strong>
            {' '}
          </p>
          <p>
            I can create a website that is responsive and looks great on all devices.
          </p>
        </li>
        <li>
          <p className="font-bold text-amber-600">
            {' '}
            <strong>UI/UX Designer</strong>
            {' '}
          </p>
          <p>
            I can design the best looking UI/UX for your website.
          </p>
        </li>
        <li />
      </ul>
    </div>
  </div>
);

export default About;
