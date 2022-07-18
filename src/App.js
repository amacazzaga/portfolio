import Header from "./Header";
import Body from "./Content";
import Footer from "./Footer";
import Name from "./Name";
import "./App.css";
import Content from "./Content";

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
          <Content />
        </div>
        <footer>
          <div className="container-footer">
            <Footer />
          </div>
        </footer>
      </main>
    </body>
  );
}

export default App;
