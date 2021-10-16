import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div className="section" id="contactSection">
      <div className="container">
        <Title text="C O N T A C T &ensp;M E"/>
        <div id="contactTopSpacing"></div>
        <p className="contactParagraph">Let's chat.</p>
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