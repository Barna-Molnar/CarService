import React from "react";
import "./FixedMenu.scss";
import { Link } from "react-router-dom";
import Scrollchor from "react-scrollchor";

const FixedMenu = () => {
  return (
    <section className="fixed-menu">
      <div className="fixed-menu-logo">
        <img src="/img/logo.svg" alt="" srcset="" />
      </div>
      <div className="fixed-menu-name">
        <h1>Uwe Shäf KFZ MeisterBetrieb</h1>
      </div>
      <div className="fixed-menu-menu">
        <ul className="grid-menu">
          <li className="grid-menu-item">
            <a href="/">
              <span>Home</span>
            </a>
          </li>
          <li className="grid-menu-item">
            <a href="/#leistungen">
              <span>Leistungen</span>
            </a>
          </li>
          <li className="grid-menu-item">
            <a href="/#about">
              <span>Über uns</span>
            </a>
          </li>
          <li className="grid-menu-item">
            <Link to="/contact">
              <span>Kontankt</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FixedMenu;
