import React, { Component } from "react";
import { render } from "react-dom";

//import "../css/App.css";
import Home from "./Home";

export default class App extends Component {
  render() {
    return <Home />;
  }
}

render(<App />, document.getElementById("root"));
