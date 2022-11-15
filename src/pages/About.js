import React from 'react';

const longText1 = 'Hi, My name is Affaxed Kiprotich. I am a web developer from Kenya. I can build powerful and robust web products using the latest technologies-JavaScript, React, Ruby, Ruby on Rails, Postgresql, and more. I am passionate about building scalable web applications and I am always looking for opportunities to expand my knowledge base to keep up with both the new and the old technologies.';

const longText2 = 'I am a graduate of Microverse, a remote software development school. I have been learning for the past 1 year and I am still learning. I have worked on several projects, both solo and collaborative; that vary in complexity and currently looking for opportunities to work on more challenging projects.';

const About = () => (
  <div className="about">
    <h1 className="">
      {' '}
      About Me
      <p className="" />
    </h1>
    <p>
      {longText1}
    </p>
    <p>
      {longText2}
    </p>
  </div>
);

export default About;
