import React, { useState, Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contactImage from "../../images/contact-blue.jpg";
import Modal from "../UI/Modal";
import { db } from "../../firebase";
import { contactMethods } from "../../contactMethods";

import "./contact.scss";

export default function Contact({ setOpenMenu }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const [messageModal, setMessageModal] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    setLoader(true);

    if (email.length < 5 || message.length < 10) {
      setMessageModal({
        title: "Failed",
        message: "Please fill out the form completely.",
      });
    } else if (
      //eslint-disable-next-line
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false
    ) {
      setMessageModal({
        title: "Failed",
        message: "Please enter a valid email address.",
      });
    } else {
      db.collection("contacts")
        .add({
          email: email,
          message: message,
        })
        .then(() => {
          setMessageModal({
            title: "Success!",
            message:
              "Thank you for reaching out! You will receive a reply shortly.",
          });
          setLoader(false);
        })
        .catch((error) => {
          setMessageModal({
            title: "Failed",
            message: error.message,
          });
          setLoader(false);
        });
    }

    setEmail("");
    setMessage("");
  };

  const closeModalHandler = () => {
    setMessageModal(null);
  };

  return (
    <Fragment>
      <div className="contact" id="contact" onClick={() => setOpenMenu(false)}>
        <div className="form-container">
          <h2>#contact</h2>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
            />
            <textarea
              placeholder="Message"
              name="message"
              id="message"
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit" style={{ background: loader ?? "#ccc" }}>
              SEND
            </button>
          </form>
          <div className="link-container">
            {contactMethods
              .filter((contactMethod) => contactMethod.type === "link")
              .map((contactLink) => (
                <div
                  key={contactLink.label}
                  className={`link ${contactLink.label.toLowerCase()}`}
                >
                  <a href={contactLink.href} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={contactLink.icon} className="icon" />
                    <p className="link-label">{contactLink.label}</p>
                    <p className="link-content">: {contactLink.href}</p>
                  </a>
                </div>
              ))}
          </div>
        </div>
        <div className="image">
          <img src={contactImage} alt="envelopes-blue-background" />
        </div>
      </div>
      {messageModal && (
        <Modal
          onConfirm={closeModalHandler}
          title={messageModal.title}
          message={messageModal.message}
        />
      )}
    </Fragment>
  );
}
