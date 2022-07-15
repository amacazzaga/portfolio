import React from "react";
import DescriptionButton from "./DescriptionButton";

const ProyectReact = ({
  href,
  img,
  JavascriptLogo,
  HtmlLogo,
  ReactLogo,
  CssLogo,
  BootstrapLogo,
  description
}) => {
  return (
    <div className="proyect">
      <a href={href}>
        <img className="img-fluid-proyect" src={img}></img>
      </a>
      <div className="container-img">
        <div>
          <img className="img-fluid-proyectReact" src={JavascriptLogo} alt="" />
        </div>
        <div>
          <img className="img-fluid-proyectReact" src={ReactLogo} alt="" />
        </div>
        <div>
          <img className="img-fluid-proyectReact" src={HtmlLogo} alt="" />
        </div>
        <div>
          <img className="img-fluid-proyectReact" src={CssLogo} alt="" />
        </div>
        <div>
          <img className="img-fluid-proyectReact" src={BootstrapLogo} alt="" />
        </div>
      </div>
      <DescriptionButton description={description}/>
    </div>
  );
};

export default ProyectReact;
