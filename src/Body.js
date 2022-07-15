import { useState } from "react";
import React from "react";
import ProyectReact from "./ProyectReact";
import ProyectVJavascript from "./ProyectVJavascript";
import simonSays from "./img/simonsays.png";
import calculator from "./img/calculator.png";
import tictactoe from "./img/tictactoe.png";
import menuhotel from "./img/menuhotel.png";
import JavascriptLogo from "./img/javascript.png";
import HtmlLogo from "./img/hhtml.png";
import CssLogo from "./img/css.png";
import ReactLogo from "./img/react.png";
import BootstrapLogo from "./img/bootstrap.png";

const Body = () => {
  return (
    <div className="container-xl">
      <div className="container-frontend">
        <p className="front-end-p">Front-End Developer with Javascript</p>
      </div>
      <div className="col">
        <div class="col-12 d-flex justify-content-center ">
          <ProyectReact
            href="https://challenge-react-kp1ugbf7s-amacazzaga.vercel.app/"
            img={menuhotel}
            JavascriptLogo={JavascriptLogo}
            HtmlLogo={HtmlLogo}
            CssLogo={CssLogo}
            ReactLogo={ReactLogo}
            BootstrapLogo={BootstrapLogo}
            description={<p>menuhotel</p>}
          />
        </div>
        <div class="col-12 d-flex justify-content-center ">
          <ProyectVJavascript
            href="https://tic-tac-toe-six-dusky.vercel.app/"
            img={tictactoe}
            JavascriptLogo={JavascriptLogo}
            HtmlLogo={HtmlLogo}
            CssLogo={CssLogo}
            description={
              <p>My first game on Vanilla Javascript!, Enjoy it :</p>
            }
          />
        </div>
        <div class="w-100"></div>
        <div class="col-12 d-flex justify-content-center ">
          <ProyectVJavascript
            href="https://simon-says-kappa.vercel.app/"
            img={simonSays}
            JavascriptLogo={JavascriptLogo}
            HtmlLogo={HtmlLogo}
            CssLogo={CssLogo}
            description={<p>Classics, never get old, Try it!</p>}
          />
        </div>
        <div class="col-12 d-flex justify-content-center ">
          <ProyectVJavascript
            href="https://calculator-seven-nu.vercel.app/"
            img={calculator}
            JavascriptLogo={JavascriptLogo}
            HtmlLogo={HtmlLogo}
            CssLogo={CssLogo}
            description={
              <p>Made a calculator just for fun and some practice!.</p>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
