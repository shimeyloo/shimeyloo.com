import React from "react";
import github from "../images/rightBar/github.png"
import linkedin from "../images/rightBar/linkedin.png"
import email from "../images/rightBar/mail.png"
import phone from "../images/rightBar/telephone.png"
import instragram from "../images/rightBar/instagram.png"
import line from "../images/rightBar/blackVerticalLine.png"

function SocialButton(props) {
  return (
    <div className="container">
      <button className="rightBarButton">
        <a href={props.link}>
          <img src={props.image} alt={props.name}></img>
        </a>
      </button>
    </div>
  ); 
}

function RightBar() {
  return (
    <div className="rightBarSection">
      <SocialButton image={github} name="Github" link="https://github.com/shimeyloo" />
      <SocialButton image={email} name="Email" link="mailto: shimeyloo@gmail.com" />
      <SocialButton image={phone} name="Phone" link="tel:6263848415" />
      <SocialButton image={linkedin} name="LinkedIn" link="https://www.linkedin.com/in/shimeyloo/" />
      <SocialButton image={instragram} name="Instragram" link="https://www.instagram.com/shimeyloo/" />
      <div className="container">
        <img className="rightBarLine" src={line} alt="Line"></img>
      </div>
    </div>
  );
}

export default RightBar;