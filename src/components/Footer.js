import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faLinkedin,faMedium,faAngellist,faInstagram} from '@fortawesome/free-brands-svg-icons';

const linkedin = <FontAwesomeIcon icon={faLinkedin} />;
const twitter = <FontAwesomeIcon icon={faTwitter} />;
const angellist = <FontAwesomeIcon icon={faAngellist} />;
const medium = <FontAwesomeIcon icon={faMedium} />;
const insta =  <FontAwesomeIcon icon={faInstagram} />;

const Footer = () => (
  <section className="footer">
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/affax/" target="_blank" rel="noreferrer">
            {linkedin}
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/affax/" target="_blank" rel="noreferrer">
            {twitter}
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/affax/" target="_blank" rel="noreferrer">
            {angellist}
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/affax/" target="_blank" rel="noreferrer">
            {medium}
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/affax/" target="_blank" rel="noreferrer">
            {insta}
        </a>
      </li>
    </ul>

    <p> Affaxed © 2022</p>
  </section>
);

export default Footer;
