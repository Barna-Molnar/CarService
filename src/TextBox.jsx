import React from "react";
import "./TextBox.scss";

const TextBox = (props) => {
  return (
    <div className="textBox-container ">
      <div className="textBox-text">{props.children}</div>
      <button className="textBox-btn-openContact" onClick={props.btnOnClick}>
        {props.btnText}
      </button>
    </div>
  );
};

export default TextBox;
