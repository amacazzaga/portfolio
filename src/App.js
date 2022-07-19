import Header from "./components/Header";
import Footer from "./components/Footer";
import Name from "./components/Name";
import Content from "./components/Content";
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
