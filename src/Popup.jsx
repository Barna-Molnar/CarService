import React from "react";
import "./Popup.scss";

const Popup = (props) => {
  return (
    <>
      <div className={`popup ${props.popupOpen ? "" : "hidden"}`}>
        {props.children}
        <button className="btn-popup--close" onClick={props.onClose}>
          x
        </button>
      </div>
      <div className={`overlay ${props.popupOpen ? "" : "hidden"}`}></div>
    </>
  );
};

export default Popup;
