import React from "react";
import "./contact.scss";

export default function Contact({ setOpenMenu }) {
  return (
    <div className="contact" id="contact" onClick={() => setOpenMenu(false)}>
      Contact
    </div>
  );
}
