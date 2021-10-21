import React from "react";
import Title from "./Title";
import lively from "../images/projects/lively-balloons.png";
import invaders from "../images/projects/invaders.png";
import hangman from "../images/projects/hangman.png";
import website from "../images/projects/website.png";
import progress from "../images/projects/progress.png";
import weather from "../images/projects/weather.png";

function EachProject(props) {
  return(
    // Note: Project images are 5in x 3in, 72 px/in
    <div className="col eachProjectSpacing" data-aos="zoom-in-up" data-aos-once="true" data-aos-duration="800">
      <a href={props.link} target="_blank" rel="noreferrer">
        <button className="removeDecoration centerBlock ">
        <div className="image-project-container">
          <h4>{props.name}</h4>
          <p>{props.description}</p>
          <img className="eachProjectHover black-border" src={props.image} alt={props.name}></img>
        </div>
        </button>
      </a>
    </div>
  );
}

function Projects() {
  return (
    <div className="section page-container" id="projectsSection">
      <div className="container">
        <Title text="P R O J E C T S"/>
        <div className="container projectSpacing">
          <div className="row">
            <EachProject 
              name="shimeyloo.com" 
              image={website} 
              link="https://github.com/shimeyloo/shimeyloo.com"  
              description="My portfolio website created with React, Bootstrap, HTML, CSS and Javascript." 
            />
            <EachProject 
              name="Cryptocurrency Tracker" 
              image={progress} 
              link="https://github.com/shimeyloo" 
              description="In Progress..." 
            />
            <EachProject 
              name="Hangman" 
              image={hangman} 
              link="https://github.com/shimeyloo/Hangman" 
              description="Client Server Game created with Python and sockets." 
            />
            <EachProject 
              name="Greenhouse Invaders" 
              image={invaders} 
              link="https://github.com/shimeyloo/Greenhouse-Invaders" 
              description="Space invader inspired game for OSU Fall 2021 Hackathon created with Python, and Pygame." 
            />
            <EachProject 
              name="Current Weather" 
              image={weather} 
              link="https://github.com/shimeyloo/Current-Weather" 
              description="Simple web application that gets the current weather for specified location by calling openweathermap API." 
            />
            <EachProject 
              name="Lively Balloons" 
              image={lively} 
              link="https://github.com/shimeyloo/Lively-Balloons" 
              description="My first website created with HTML, CSS, Bootstrap and Javascript." 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;