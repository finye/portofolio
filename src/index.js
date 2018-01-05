import React from "react";
import { render } from "react-dom";

import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";

//import { Icon } from "semantic-ui-react";

import Home from "../src/components/Home";
import Skills from "../src/components/Skills";
import Experience from "../src/components/Experience";
import Contact from "../src/components/Contact";
import Education from "../src/components/Education";

//import App from "../src/components/App";

import "../node_modules/semantic-ui-css/semantic.min.css";

render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/skills" component={Skills} />
      <Route path="/experience" component={Experience} />
      <Route path="/contact" component={Contact} />
      <Route path="/education" component={Education} />
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
