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
            <p>Hello!</p>
            <p>My name is Shimey and I am aspiring to be a Software Engineer.</p>
            <p>I’m currently a student at Oregon State University and pursuing a B.S. degree in computer science. I have one more year left and plan on graduating in the winter of 2022. </p>
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