import React from "react";
import lively from "../images/projects/lively-balloons.png"

function EachProject(props) {
  return(
    // Note: Project images are 5in x 3in, 72 px/in
    <div className="col eachProjectSpacing">
      <a href={props.link} target="_blank" rel="noreferrer">
        <button className="removeDecoration imageHoverButton centerBlock">
          <img src={props.image} alt={props.name}></img>
        </button>
      </a>
    </div>
  );
}

function Projects() {
  return (
    <div className="section" id="projectsSection">
      <div className="container">
        <h2 className="title">P R O J E C T S</h2>
        <div className="container projectSpacing">
          <div className="row">
            <EachProject name="Lively Balloons" image={lively} link="https://github.com/shimeyloo/Lively-Balloons" />
            <EachProject name="Lively Balloons" image={lively} link="https://github.com/shimeyloo/Lively-Balloons" />
            <EachProject name="Lively Balloons" image={lively} link="https://github.com/shimeyloo/Lively-Balloons" />
            <EachProject name="Lively Balloons" image={lively} link="https://github.com/shimeyloo/Lively-Balloons" />
            <EachProject name="Lively Balloons" image={lively} link="https://github.com/shimeyloo/Lively-Balloons" />
            <EachProject name="Lively Balloons" image={lively} link="https://github.com/shimeyloo/Lively-Balloons" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;