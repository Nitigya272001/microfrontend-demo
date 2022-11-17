import React from "react";
import ReactDOM from "react-dom";
import Content from "./components/Content";

import "./index.css";

const App = () => (
  <div className="container">
    <Content/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
