import React from "react";
import "./Modal.css";
import Button from "./Button";

function Modal({ message, header, open }) {
  return (
    open && (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close">&times;</span>
            <h2>{header}</h2>
          </div>
          <p>
            <p>{message}</p>
          </p>
          <Button color="success">Confirm</Button>
          <Button color="danger">Cancel</Button>
          <div className="modal-footer"></div>
        </div>
      </div>
    )
  );
}

export default Modal;
