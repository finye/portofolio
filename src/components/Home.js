import React from "react";

import { portofolioContent } from "../data/data";

// App components
import { Header } from "../components/Header";
import PortofolioList from "../components/PortofolioList";
//import App from "../components/App";
//import home from "../src/components/Home";
import "../css/index.css";

import "../../node_modules/semantic-ui-css/semantic.min.css";

export default class Home extends React.Component {
  render() {
    const portofolioContentList = portofolioContent.map(card => (
      <PortofolioList
        key={"card-" + card.id}
        id={card.id}
        title={card.title}
        description={card.description}
        iconClassName={card.iconClassName}
        pathname={card.path}
      />
    ));
    return (
      <div className="ui unstackable items">
        <Header />
        <ul className="cards">{portofolioContentList}</ul>
      </div>
    );
  }
}
