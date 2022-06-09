import React from "react";

import "./modal.scss";

const Modal = (props) => {
  return (
    <div className="modal">
      <div className="backdrop" onClick={props.onConfirm}></div>
      <div className="container">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <button onClick={props.onConfirm}>Okay</button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
