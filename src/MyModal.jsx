import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import "./MyModal.scss";

function MyModal(props) {
  return (
    <Modal
      className="myModal-container"
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter ">
          Öffnungszeiten
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Montag - Freitag</h4>
        <p>07:00 - 18:00 Uhr</p>
        <h4>Samstag</h4>
        <p>08:00 - 12:00 Uhr</p>
        <h4>Sonntag</h4>
        <p>geschlossen</p>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide} className="myCloseBtn">
          Close
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default MyModal;
