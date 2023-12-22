import React from "react";
import resume1 from "../images/Resume1.pdf"

function Home() {
  return (
    <div className="section page-container">
      <div className="container">
        <div id="intro">
          <p className="homeText" data-aos="fade-up" data-aos-once="true" data-aos-duration="800" data-aos-delay="1100">
            Hi &#128075;, my name is
          </p>
          <p id="homeMyName" data-aos="fade-up" data-aos-once="true" data-aos-duration="800" data-aos-delay="1300">
            S H I M E Y &ensp;L O O.
          </p>
          <p className="homeText" data-aos="fade-up" data-aos-once="true" data-aos-duration="800" data-aos-delay="1500">
            Welcome to my little corner of the internet! &#129303;
          </p>
          <a href={resume1} target="_blank" rel="noreferrer">
            <button className="button" data-aos="fade-up" data-aos-once="true" data-aos-duration="800" data-aos-delay="1700">
              R E S U M E
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
