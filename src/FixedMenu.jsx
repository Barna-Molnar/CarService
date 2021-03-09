import React from "react";
import "./FixedMenu.scss";
import { NavHashLink as NavLink } from "react-router-hash-link";

const FixedMenu = (props) => {
  return (
    <section className="fixed-menu">
      <div className="fixed-menu-logo">
        <img srcSet="img/logo.svg" alt="" />
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
            <NavLink
              activeClass="active"
              to="/#leistungen"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <span>Leistungen</span>
            </NavLink>
          </li>
          <li className="grid-menu-item">
            <NavLink
              activeClass="active"
              to="/#about"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <span>Über uns</span>
            </NavLink>
          </li>
          <li className="grid-menu-item">
            <a href="contact">
              <span>Kontankt</span>
            </a>
          </li>
        </ul>
      </div>
      {/* <Togglermenu /> */}
    </section>
  );
};

export default FixedMenu;
