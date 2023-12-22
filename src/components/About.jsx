import React from "react";
import Skills from "./Skills"
import Title from "./Title";
import me from "../images/me.png"

function AboutMe () {
  return(
    <div className="container about-container">
      <div className="row">
        <div className="col">
          <div className="about-description" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
            <p>Hello Friend!</p>
            <p>I'm Shimey, a Software Engineer who currently works for Northrop Grumman.</p>
            <p>I graduated Fall of 2023 from Oregon State University with a B.S. degree in Computer Science.</p>
            <p>If you would like to learn more about my experiences, keep scrolling down, or you can check out my resume (link in the home page). </p>
          </div>
        </div>
        <div className="col">
          <div className="about-image" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
            <img className="black-border centerBlock" src={me} alt="Me"></img>
          </div>
        </div>
      </div>
    </div>
   
    
  );
}

function About() {
  return (
    <div className="section grayBackground" id="aboutSection">
      <div className="container page-container">
        <Title text="A B O U T &ensp;M E"/>
        <AboutMe />
        <Skills />
      </div>
    </div>
  );
}

export default About;
