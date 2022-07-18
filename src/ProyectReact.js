import React from "react";
import DescriptionButton from "./DescriptionButton";

const ProyectReact = ({
  href,
  img,
  description,
}) => {
  return (
    <div className="card proyect m-5">
      <h5 class="card-title m-2">Movies TMBD</h5>
      <div class="card-body">
        <a href={href}>
          <img className="card-img-top" src={img}></img>
        </a>
        <DescriptionButton description={description} />
        <div>
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

export default ProyectReact;
