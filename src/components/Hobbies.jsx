import React from "react";
import Title from "./Title";
import dog from "../images/hobbies/Meebo.png"
import nature from "../images/hobbies/nature.png"
import bjj from "../images/hobbies/bjj.png"
import baking from "../images/hobbies/baking.png"

function EachHobby(props) {
  return (
    // Note: Project images are 4in x 4in, 72 px/in
    <div className="col-lg-6 eachHobbySpacing" data-aos="zoom-in-up" data-aos-once="true" data-aos-duration="800">
      <div className="image-container">
        <p>{props.description}</p>
        <img className="centerBlock black-border eachProjectHover" src={props.image} alt={props.name}></img>
      </div>
    </div>
  );
}

function Hobbies() {
    return (
      <div className="section grayBackground" id="hobbiesSection">
        <div className="container page-container">
          <Title text="H O B B I E S"/>
          <p data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-delay="200">Things I do for fun...</p>
          <div className="container" id="HobbiesSpacing">
            <div className="row">
              <EachHobby name="Meebo" image={bjj} description="Brazilian Jiu-Jitsu" />
              <EachHobby name="Meebo" image={nature} description="Exploring Nature" />
            </div>
            <div className="row">
              <EachHobby name="Meebo" image={dog} description="Hanging out with Meebo" />
              <EachHobby name="Meebo" image={baking} description="Baking" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Hobbies;