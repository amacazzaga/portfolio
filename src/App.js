import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Name from "./Name"
import "./App.css";

function App() {
  return (
    <div>
      <div >
        <Header className="container-header"/>
      </div>
      <div className="container-name">
        <Name/>
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
