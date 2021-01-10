// import logo from "./logo.svg";
import "./App.css";
import Head from "./component/head/Head";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./component/main/Main";
// import Foot from "./component/Foot";
// import Header from "./component/Header";

function App() {
  return (
    // <div className="mx-auto font-rehn">
    //   <div className="acc-atas"></div>
    //   <div className="acc-bawah"></div>
    //   <Header />
    //   <Foot />
    // </div>
    <div>
      <Head />
      <Main />
    </div>
  );
}

export default App;
