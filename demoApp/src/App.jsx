import React from "react";
import ReactDOM from "react-dom";
import Header from 'header/Header';
import Content from "content/Content";
import Footer from "footer/Footer";

import "./index.css";

const App = () => (
  <div className="container">
    <Header />  
    <Content />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
