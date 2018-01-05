import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Icon } from "semantic-ui-react";

import "../css/index.css";

export default class PortofolioList extends Component {
  render() {
    return (
      <Link to={{ pathname: `${this.props.pathname}` }}>
        <li className="cards__item">
          <div className="card">
            <div className="icon__container">
              <Icon className={this.props.iconClassName} />
            </div>
            <div className="card__content">
              <div className="card__title">{this.props.title}</div>
              <p className="card__text card__text-group">
                {this.props.description}
              </p>
              <button className="btn btn--block card__btn">
                click the card to read more...
              </button>
            </div>
          </div>
        </li>
      </Link>
    );
  }
}
