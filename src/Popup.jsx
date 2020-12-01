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

//  {/* <Popup popupOpen={this.state.popupOpen} onClose={this.closePopup}>
//             <h3>Öffnungszeiten</h3>
//             <h4>Montag - Freitag</h4>
//             <p>07:00 - 18:00 Uhr</p>
//             <h4>Samstag</h4>
//             <p>08:00 - 12:00 Uhr</p>
//             <h4>Sonntag</h4>
//             <p>geschlossen</p>
//           </Popup> */}
