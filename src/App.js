import Header from "./components/Header";
import Name from "./components/Name";
import Content from "./components/Content";
import "./App.css";

function App() {
  return (
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
    </main>
  );
}

export default App;
