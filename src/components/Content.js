import React from "react";
import ProyectReact from "./ProyectReact";
import ProyectVJavascript from "./ProyectVJavascript";
import simonSays from "../img/simonsays.png";
import calculator from "../img/calculator.png";
import tictactoe from "../img/tictactoe.png";
import tmbd from "../img/tmbd.jpeg";

const Content = () => {
  return (
    <div className="container-xxl">
      <div className="container-frontend">
        <p className="front-end-p">Full Stack Web Developer</p>
      </div>
      <div className="container-xxl">
        <div className="row">
          <div class="col-md-6 col-lg-6 col-xl-6 col-sm-6 d-flex justify-content-center ">
            <ProyectReact
              href="https://moviestmbd.vercel.app/"
              img={tmbd}
              description={
                <p>
                  This is my first proyect using React , Bootstrap, and
                  consuming a real API
                </p>
              }
              repo="https://github.com/amacazzaga/moviestmbd"
            />
          </div>
          <div class="col-md-6 col-lg-6 col-xl-6 col-sm-6  d-flex justify-content-center ">
            <ProyectVJavascript
              href="https://simon-says-kappa.vercel.app/"
              img={simonSays}
              title={<p>Simon Says</p>}
              description={
                <p>
                  I replicate a classic game with Vanilla Javascript, CSS and
                  HTML
                </p>
              }
              repo="https://github.com/amacazzaga/simon-says"
            />
          </div>
          <div class="col-md-6 col-lg-6 col-xl-6 col-sm-6 d-flex justify-content-center ">
            <ProyectVJavascript
              href="https://tic-tac-toe-six-dusky.vercel.app/"
              img={tictactoe}
              title={<p>Tic Tac Toe</p>}
              description={
                <p>My first game on Vanilla Javascript!, Enjoy it :</p>
              }
              repo="https://github.com/amacazzaga/Tic-Tac-Toe"
            />
          </div>

          <div class="col-md-6 col-lg-6 col-xl-6 col-sm-6  d-flex justify-content-center ">
            <ProyectVJavascript
              href="https://calculator-seven-nu.vercel.app/"
              img={calculator}
              title={<p>Calculator</p>}
              description={
                <p>Made a calculator just for fun and some practice!.</p>
              }
              repo="https://github.com/amacazzaga/Calculator"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
