import React from 'react';

const About = () => (
  <div className="pl-20 pt-10 gap-7 flex flex-col items-center min-h-screen">
    <h2 className="text-lg font-bold ">
      {' '}
      ABOUT ME
      <p className="w-10 h-10 bg-amber-500 rounded-full  absolute top-24  left-17 -z-10 " />
    </h2>
    <h3 className="font-extrabold text-xl">
      Hello there. I am Affaxed Kiprotich
    </h3>
    <p className="w-[50%]">
      I am a full-stack web developer from Kenya. I have technical skills in HTML, CSS, JavaScript, React, Ruby,Ruby on Rails  and Postgresql. I have a passion for building beautiful, responsive websites.
    </p>
    <div>
      <ul className="flex flex-col gap-6">
        <li>
          <p>
            <strong>Web Development</strong>
          </p>
          <p>
            I am a full stack web developer with a passion for building beautiful
          </p>
        </li>
        <li>
          <p>
            {' '}
            <strong>Web Design</strong>
            {' '}
          </p>
          <p>
            I can create a website that is responsive and looks great on all devices.
          </p>
        </li>
        <li>
          <p>
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
