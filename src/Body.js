import React from "react";
import Proyect from "./Proyect";

const Body = () => {
  return (
    <main className="container-main">
      <div className="container-frontend">
      <p className="front-end-p">Front-End Developer with Javascript</p>
      </div>
      <section className="section">
        <div className="section-1">
          <Proyect />
          <Proyect />
        </div>
        <div className="section-2">
          <Proyect />
          <Proyect />
        </div>
      </section>
    </main>
  );
};

export default Body;
