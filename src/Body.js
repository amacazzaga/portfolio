import React from "react";
import Proyect from "./Proyect";

const Body = () => {
  return (
    <main className="container">
      <section className="section">
        <div>
          <Proyect />
          <Proyect />
        </div>
        <div>
          <Proyect />
          <Proyect />
        </div>
      </section>
    </main>
  );
};

export default Body;
