import React from "react";
import LinkedinLogo from "./img/linkedin.png";
import GithubLogo from "./img/github.png";
import EmailLogo from "./img/email.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact-div">
        <h4>CONTACT</h4>
      </div>
      <div>
        <section>
          <li className="navbar">
            <a href="https://www.linkedin.com/in/agustin-macazzaga-675b3a1b3/">
              <img className="img-fluid-contact" src={LinkedinLogo} />
            </a>
          </li>
          <li className="navbar">
            <a href="https://github.com/amacazzaga">
              {" "}
              <img className="img-fluid-contact" src={GithubLogo} />
            </a>
          </li>
          <li className="navbar">
            <a href="">
              {" "}
              <img className="img-fluid-contact" src={EmailLogo} />
            </a>
          </li>
        </section>
      </div>
    </div>
  );
};

export default Footer;
