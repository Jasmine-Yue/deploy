import "./Footer.css";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

   /*       <i className="fab fa-twitter"></i>
      <a href="https://github.com/Jasmine-Yue?tab=repositories">
        <i className="fab fa-github"></i>
      </a>
      <i className="fab fa-linkedin"></i> */

function Footer({ className }) {
  return (
     
    <footer className={`footer ${className}`} >  
      <p>More About Me</p>
      <div className="icons">
        <a
          href="https://github.com/Jasmine-Yue?tab=repositories"
          className="github"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=100091628924295"
          className="facebook"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>

        <a href="https://www.linkedin.com/in/xingpingyue/" className="linkedin">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
