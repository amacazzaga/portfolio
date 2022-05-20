import React from "react";
import { useState } from "react";
import simonSays from "./img/simonsays.png";

const Proyect = ({ href }) => {
  const [state, setState] = useState("collapse");

  return (
    <div className="proyect">
      <a href={href}>
        <img className="img-fluid-proyect"
         src={simonSays}
        ></img>
      </a>
      <p>
        <div className="button-description-container">
          <button
            className="button-description"
            onClick={() => {
              if (state === "collapse") {
                setState("collapse.show");
              } else if (state === "collapse.show") {
                setState("collapse");
              }
            }}
            class="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Description
          </button>
        </div>
      </p>
      <div className={state} id="collapseExample">
        <div class="card card-body">
          This game is a classic all time called simonSays
        </div>
      </div>
    </div>
  );
};

export default Proyect;
