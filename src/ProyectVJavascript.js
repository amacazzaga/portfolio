import React from "react";
import DescriptionButton from "./DescriptionButton";

const ProyectVJavascript = ({
  href,
  img,
  JavascriptLogo,
  HtmlLogo,
  CssLogo,
  description,
}) => {
  return (
    <div className="proyect">
      <a href={href}>
        <img className="img-fluid-proyect" src={img}></img>
      </a>
      <div className="container-img">
        <div>
          <img
            className="img-fluid-proyectVJavascript"
            src={JavascriptLogo}
            alt=""
          />
        </div>
        <div>
          <img className="img-fluid-proyectVJavascript" src={HtmlLogo} alt="" />
        </div>
        <div>
          <img className="img-fluid-proyectVJavascript" src={CssLogo} alt="" />
        </div>
      </div>
      <DescriptionButton description={description} />
    </div>
  );
};

export default ProyectVJavascript;
