import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer";

import "./index.css";

const App = () => (
  <div className="container">
    <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
