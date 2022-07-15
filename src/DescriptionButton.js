import React from "react";
import { useState } from "react";

const DescriptionButton = ({description}) => {
  const [state, setState] = useState("collapse");
  return (
    <div>
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
      <div className={state} id="collapseExample">
        <div class="card card-body">
          {description}
        </div>
      </div>
    </div>
  );
};

export default DescriptionButton;