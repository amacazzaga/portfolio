import React from "react";
import JavascriptLogo from "./img/javascript.png";
import HtmlLogo from "./img/hhtml.png";
import CssLogo from "./img/css.png";
import ReactLogo from "./img/react.png";

const Header = () => {
  return (
    <header>
      <div className="container-img">
        <div>
          <img className="img-fluid" src={JavascriptLogo} alt="" />
        </div>
        <div>
          <img className="img-fluid" src={ReactLogo} alt="" />
        </div>
        <div>
          <img className="img-fluid" src={HtmlLogo} alt="" />
        </div>
        <div>
          <img className="img-fluid" src={CssLogo} alt="" />
        </div>
       
      </div>
      <div className="div-h1">
        <h1>Agustin Macazzaga</h1>
        </div>
    </header>
  );
};

export default Header;
