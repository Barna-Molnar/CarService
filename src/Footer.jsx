/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <div className="container-footer">
        <div className="footer-contact">
          <p className="telephone">0123456</p>
          <p className="fax">0123456</p>
          <p className="email">
            <a href="#">iDontknow@gmail.com</a>
          </p>
        </div>
        <div className="footer-daten-secure">
          <p className="impressum">
            <a href=""> Impressum</a>
            <span>&nbsp;|&nbsp;</span>
          </p>
          <p className="haftung">
            <a href=""> Haftungsausschluss</a>
            <span>&nbsp;|&nbsp;</span>
          </p>
          <p className="daten">
            <a href=""> DatenSchutz</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
