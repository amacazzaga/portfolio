import React from "react";
import Proyect from "./Proyect";

const Body = () => {
  return (
    <main className="container-main">
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
