import React from "react";
import Proyect from "./Proyect";
import simonSays from "./img/simonsays.png";
import calculator from "./img/calculator.png"
import tictactoe from "./img/tictactoe.png"

const Body = () => {
  return (
    <main className="container-main">
      <div className="container-frontend">
        <p className="front-end-p">Front-End Developer with Javascript</p>
      </div>
      <section className="container-section">
        <div className="section-1">
          <Proyect />
          <Proyect href="https://tic-tac-toe-six-dusky.vercel.app/" img={tictactoe} />
        </div>
        <div className="section-2">
          <Proyect href="https://simon-says-kappa.vercel.app/" img={simonSays} />
          <Proyect href ="https://calculator-seven-nu.vercel.app/" img={calculator} />
        </div>
      </section>
    </main>
  );
};

export default Body;
