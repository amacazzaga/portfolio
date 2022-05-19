import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div>
      <div className="container-header">
        <Header />
      </div>
      <div className="container-main">
        <Body />
      </div>
      <div className="container-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
