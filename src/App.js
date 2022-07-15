import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Name from "./Name";
import "./App.css";

function App() {
  return (
    <body>
      <main>
        <header>
          <div>
            <Header />
          </div>
        </header>
        <div className="container-name">
          <Name />
        </div>
        <div className="container-main">
          <Body />
        </div>
        <div className="container-footer">
          <Footer />
        </div>
      </main>
    </body>
  );
}

export default App;
