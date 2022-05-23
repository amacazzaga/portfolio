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
import DescriptionButton from "./DescriptionButton";

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
          <DescriptionButton
            description={<p>This is a challenge from Alkemy.org</p>}
          />
          <ProyectVJavascript
            href="https://tic-tac-toe-six-dusky.vercel.app/"
            img={tictactoe}
            JavascriptLogo={JavascriptLogo}
            HtmlLogo={HtmlLogo}
            CssLogo={CssLogo}
          />
          <DescriptionButton
            description={
              <p>My first game on Vanilla Javascript!, Enjoy it :)</p>
            }
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
          <DescriptionButton
            description={
              <p>
               Classics, never get old, Try it!
              </p>
            }
          />
          <ProyectVJavascript
            href="https://calculator-seven-nu.vercel.app/"
            img={calculator}
            JavascriptLogo={JavascriptLogo}
            HtmlLogo={HtmlLogo}
            CssLogo={CssLogo}
          />
          <DescriptionButton
            description={
              <p>
                Made a calculator just for fun and some practice!.
              </p>
            }
          />
        </div>
      </section>
    </main>
  );
};

export default Body;
