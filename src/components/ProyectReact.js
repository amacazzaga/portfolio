import React from "react";

const ProyectReact = ({ href, img, description, repo }) => {
  return (
    <div className="card proyect m-2">
      <h5 class="card-title m-2">Movies TMBD</h5>
      <div class="card-body">
        <a href={href}>
          <img className="card-img-top" src={img}></img>
        </a>
        <div>
          <p class="card-text m-2">{description}</p>
          <a href={repo} class="btn btn-primary">
            Go Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProyectReact;
