// import logo from "./logo.svg";
import "./App.css";
import Foot from "./component/Foot";
import Header from "./component/Header";

function App() {
  return (
    <div className="mx-auto">
      <div className="acc-atas"></div>
      <div className="acc-bawah"></div>
      <Header />
      <Foot />
    </div>
  );
}

export default App;
