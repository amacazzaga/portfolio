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

const Body = () => {
  return (
    <main className="container-main">
      <div className="container-frontend">
        <p className="front-end-p">Front-End Developer with Javascript</p>
      </div>
      <section className="container-section">
        <div className="section-1">
          <ProyectReact
            href="https://challenge-react-kp1ugbf7s-amacazzaga.vercel.app/"
            img={menuhotel}
            JavascriptLogo={JavascriptLogo}
            HtmlLogo={HtmlLogo}
            CssLogo={CssLogo}
            ReactLogo={ReactLogo}
          />
          <ProyectVJavascript
            href="https://tic-tac-toe-six-dusky.vercel.app/"
            img={tictactoe}
            JavascriptLogo={JavascriptLogo}
            HtmlLogo={HtmlLogo}
            CssLogo={CssLogo}
          />
        </div>
        <div className="section-2">
          <ProyectVJavascript
            href="https://simon-says-kappa.vercel.app/"
            img={simonSays}
            JavascriptLogo={JavascriptLogo}
            HtmlLogo={HtmlLogo}
            CssLogo={CssLogo}
          />
          <ProyectVJavascript
            href="https://calculator-seven-nu.vercel.app/"
            img={calculator}
            JavascriptLogo={JavascriptLogo}
            HtmlLogo={HtmlLogo}
            CssLogo={CssLogo}
          />
        </div>
      </section>
    </main>
  );
};

export default Body;
