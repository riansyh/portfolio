import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "aos/dist/aos.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AOS from "aos";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

AOS.init();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
