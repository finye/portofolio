import React from "react";
import { NavLink } from "react-router-dom";

import img from "../img/funu_3.png";

import { Icon } from "semantic-ui-react";

import { portofolioContent } from "../data/data";

export const Header = props => {
  return (
    <div className="card image__container-main">
      <div className="icon__container">
        <img className="ui user avatar image" alt="finye" src={img} />
      </div>
      <div className="card__content user__header">
        <div className="card__title">Finnan Tiku</div>
        <p className="card__text">Junior Game Developer</p>
      </div>
      <div className="linker">
        <div className="inner">
          <NavLink exact to={{ pathname: "/" }}>
            <Icon className="home large icon__size-adj" />
          </NavLink>
        </div>
        {portofolioContent.map((i, index) => (
          <div className="inner" key={i.id}>
            <NavLink to={{ pathname: `${i.path}` }}>
              <Icon className={i.iconClassName} />
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};
