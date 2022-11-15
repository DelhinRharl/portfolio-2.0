import React from 'react';

const longText = ' I am conversant with Git and GitHub used for version control  purposes. I have proficiency in relational database systems- Postgresql for data management.  I also have knowledge in Amazon Web  Services, Azure, as well as Google Cloud Platform used by cloud-oriented companies.';

const longText1 = ' I am well acquanted with front-end technologies- JavaScript, HTML,CSS, React and some frameworks like TailwindCSS and SCSS.';

const longText2 = '  I also work on back-end-focused projects using Ruby and Ruby on Rains. I am also familiar with REST-APIs and have built projects using these technologies.';

const Services = () => (
  <div className="services">
    <h1> Services</h1>
    <p>I offer all these services</p>
    <ul>
      <li>
        <h2>Front-end Development</h2>
        <p>{longText1}</p>
      </li>
      <li>
        <h2>Back-end Development</h2>
        <p>{longText2}</p>
      </li>
      <li>
        <h2>Integration and data management</h2>
        <p>{longText}</p>
      </li>
    </ul>
  </div>
);
export default Services;
