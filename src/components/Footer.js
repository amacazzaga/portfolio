import React from "react";
import LinkedinLogo from "../img/linkedin.png";
import GithubLogo from "../img/github.png";
import { useState } from "react";

const Footer = () => {
  const [state, setState] = useState("accordion-collapse collapse");
  return (
    <div class="accordion accordion-flush mb-3">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            onClick={() => {
              if (state === "accordion-collapse collapse") {
                setState("accordion-collapse collapse.show");
              } else {
                setState("accordion-collapse collapse");
              }
            }}
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            CONTACT ME!
          </button>
        </h2>
        <div
          className={state}
          aria-labelledby="flush-headingOne"
        >
          <div class="accordion-body">
            <section>
              <li className="navbar">
                <a href="https://www.linkedin.com/in/agustin-macazzaga-675b3a1b3/">
                  <img className="img-fluid-contact" src={LinkedinLogo} />
                </a>
              </li>
              <li className="navbar">
                <a href="https://github.com/amacazzaga">
                  <img className="img-fluid-contact" src={GithubLogo} />
                </a>
              </li>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
