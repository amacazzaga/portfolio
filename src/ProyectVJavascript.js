import React from "react";
import { useState } from "react";

const ProyectVJavascript = ({ href, img, JavascriptLogo, HtmlLogo, CssLogo }) => {
  const [state, setState] = useState("collapse");

  return (
    <div className="proyect">
      <a href={href}>
        <img className="img-fluid-proyect" src={img}></img>
      </a>
     
        <div className="container-img">
          <div>
            <img className="img-fluid-proyectVJavascript" src={JavascriptLogo} alt="" />
          </div>

          <div>
            <img className="img-fluid-proyectVJavascript" src={HtmlLogo} alt="" />
          </div>
          <div>
            <img className="img-fluid-proyectVJavascript" src={CssLogo} alt="" />
          </div>
        </div>
      
    </div>
  );
};

export default ProyectVJavascript;
