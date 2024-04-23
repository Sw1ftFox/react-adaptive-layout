import React from "react";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <i>Vladislav</i>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href="https://github.com/Sw1ftFox" className="btn">
          GitHub Profile
        </a>
      </div>
    </header>
  );
};

export default Header;
