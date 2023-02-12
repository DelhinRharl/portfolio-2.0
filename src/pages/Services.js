import React from 'react';

const longText = ' I am conversant with Git and GitHub used for version control  purposes. I have proficiency in both relational and non-relational database systems- Postgresql and MongoDB for data management.  I also have knowledge in Amazon Web  Services, Azure, as well as Google Cloud Platform used by cloud-oriented companies.';

const longText1 = ' I am well acquanted with front-end technologies- JavaScript, HTML,CSS, React and some frameworks like TailwindCSS and SCSS.';

const longText2 = '  I also work on back-end-focused projects using Ruby and Ruby on Rails. I am also familiar with REST-APIs and have built projects using these technologies.';

const Services = () => (
  <section className="services">
    {/* <div className="services-text"> */}
    <ul className="services-text">
      <h2>Services</h2>
      <li>
        <h3>Front-end Development</h3>
        <p>{longText1}</p>
      </li>
      <li>
        <h3>Back-end Development</h3>
        <p>{longText2}</p>
      </li>
      <li>
        <h3>Integration and data management</h3>
        <p>{longText}</p>
      </li>
    </ul>
    {/* </div> */}
  </section>
);
export default Services;
