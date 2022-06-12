import React, { useState, Fragment } from "react";
import "./contact.scss";
import contactImage from "../../images/contact-blue.jpg";
import Modal from "../UI/Modal";
import { db } from "../../firebase";

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
        <div className="left">
          <h2>Contact.</h2>
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
              Send
            </button>
          </form>
        </div>
        <div className="right">
          <img src={contactImage} alt="" />
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
