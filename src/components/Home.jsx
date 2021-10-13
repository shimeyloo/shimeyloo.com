import React from "react";
import resume from "../images/Resume.pdf"

function Home() {
  return (
    <div className="section">
      <div className="container">
        <div id="intro">
          <p className="homeText">Hi &#128075;, my name is</p>
          <p id="homeMyName">S H I M E Y &ensp;L O O.</p>
          <p className="homeText">Aspiring Software Engineer</p>
          <a href={resume} target="_blank" rel="noreferrer">
            <button className="button">R E S U M E</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;