import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Footer from "./component/footer/Footer";
import Gallery from "./page/Gallery";
import HomePage from "./page/Home";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/gallery" component={Gallery}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
