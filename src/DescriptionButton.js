import React from "react";
import { useState } from "react";

const DescriptionButton = ({description}) => {
  const [state, setState] = useState("");
  return (
<div  onClick={() => {
            if (state === "") {
              setState("show");
            } else if (state === "show") {
              setState("");
            }
          }} class="dropdown">
  <a class="btn btn-secondary dropdown-toggle "  role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="true">
    Description
  </a>
  <ul class= {`dropdown-menu ${state}`} aria-labelledby="dropdownMenuLink">
    <p>{description}</p>
  </ul>
</div>
  );
};

export default DescriptionButton;