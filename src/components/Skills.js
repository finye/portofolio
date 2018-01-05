import React from "react";

import { Header } from "../components/Header";

export default class Skills extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="card Header__content">
          <div className="card__content">
            <div className="card__title">Skills</div>
            <p className="card__text card__text-group">
                Once up on a time in a far, far, far away land called Ethiopia
                the journey of this mysterious... Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat
            </p>
          </div>
        </div>
      </div>
    );
  }
}
