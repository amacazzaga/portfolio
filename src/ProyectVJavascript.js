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
    <div className="card proyect m-5">
      <div class="card-body">
        <a href={href}>
          <img className="card-img-top" src={img}></img>
        </a>
      
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
          <div className="container d-flex">
          <div>
            <img
              className="img-fluid"
              src={JavascriptLogo}
              alt=""
            />
          </div>
          <div>
            <img
              className="img-fluid"
              src={HtmlLogo}
              alt=""
            />
          </div>
          <div>
            <img
              className="img-fluid"
              src={CssLogo}
              alt=""
            />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProyectVJavascript;
