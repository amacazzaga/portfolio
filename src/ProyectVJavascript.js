import React from "react";
import DescriptionButton from "./DescriptionButton";

const ProyectVJavascript = ({
  href,
  img,
  description,
  title
}) => {
  return (
    <div className="card proyect m-5">
      <h5 class="card-title m-2">{title}</h5>
      <div class="card-body">
        <a href={href}>
          <img className="card-img-top" src={img}></img>
        </a>
        <div>
          <p class="card-text m-2">
          {description}
          </p>
          <a href="#" class="btn btn-primary">
            Go Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProyectVJavascript;
