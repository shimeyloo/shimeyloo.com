import React from "react";

function Contact() {
  return (
    <div className="section" id="contactSection">
      <div className="container">
        <h2 className="title">C O N T A C T &ensp;M E</h2>
        <div id="contactTopSpacing"></div>
        <p className="contactParagraph">I would love to hear from you!</p>
        <a href="mailto: shimeyloo@gmail.com">
          <button className="button">SAY HELLO</button>
        </a>
        <div id="contactBottomSpacing"></div>
      </div>
    </div>
  );
}

export default Contact;