import React from "react";
import python from "../images/skills/python.png"
import javascript from "../images/skills/javascript.png"
import react from "../images/skills/react.png"
import html from "../images/skills/html-5.png"
import css from "../images/skills/css.png"
import node from "../images/skills/node.png"
import sql from "../images/skills/sql.png"
import json from "../images/skills/json-file.png"
import usa from "../images/skills/usa.png"
import mexico from "../images/skills/mexico.png"
import china from "../images/skills/china.png"

function EachSkill(props) {
  return(
    <div className="skill" data-aos="fade-up" data-aos-duration="600" data-aos-once="true" data-aos-delay="1.5s">
      <img className="centerBlock image-skill" src={props.image} alt={props.name}></img>
      <p className="skill-description">{props.name}</p>
    </div>
  ); 
}

function Skills() {
  return (
    <div className="container">
      <h2 className="subtitle" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">COMPUTER LANGUAGES</h2>
      <div className="grid">
        <EachSkill name="Python 3" image={python} />
        <EachSkill name="Javascript" image={javascript} />
        <EachSkill name="React JS" image={react} />
        <EachSkill name="HTML" image={html} />
        <EachSkill name="&ensp;CSS&ensp;" image={css} />
        <EachSkill name="SQL" image={sql} />
        <EachSkill name="Node JS" image={node} />
        <EachSkill name="JSON" image={json} />
      </div>
      <h2 className="subtitle" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">HUMAN LANGUAGES</h2>
      <div className="grid">
        <EachSkill name="English" image={usa} />
        <EachSkill name="Chinese" image={china} />
        <EachSkill name="Spanish" image={mexico} />
      </div>
    </div>
  );
}

export default Skills;