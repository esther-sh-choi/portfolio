import React, { useState } from "react";
import "./contact.scss";
import contactImage from "../../images/contact-blue.jpg";
import Modal from "../UI/Modal";

export default function Contact({ setOpenMenu }) {
  const [showModal, setShowModal] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    setShowModal(true);
  };

  return (
    <div className="contact" id="contact" onClick={() => setOpenMenu(false)}>
      <div className="left">
        <h2>Contact.</h2>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="Email" />
          <textarea
            placeholder="Message"
            name="message"
            id="message"
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="right">
        <img src={contactImage} alt="" />
      </div>
      <Modal />
    </div>
  );
}
