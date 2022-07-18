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
    <div className="card proyect" >
      <div class="card-body">
        <a href={href}>
          <img className="card-img-top img-fluid-proyect" src={img}></img>
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
            <img
              className="img-fluid-proyectVJavascript"
              src={HtmlLogo}
              alt=""
            />
          </div>
          <div>
            <img
              className="img-fluid-proyectVJavascript"
              src={CssLogo}
              alt=""
            />
          </div>
        </div>
        <DescriptionButton description={description} />
        <div>
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProyectVJavascript;
