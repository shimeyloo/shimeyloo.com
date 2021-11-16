import React from "react";

function HeaderButton(props) {
  return(
    <a href={props.link} >
      <button className={props.load} data-aos="fade-down" data-aos-once="true" data-aos-duration="800" data-aos-delay={props.delay}>
        {props.name}
      </button>
    </a>
  );
}

function Header() {
  return (
    <nav className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div className="logo" data-aos="fade-down" data-aos-once="true" data-aos-duration="800">
            SHIMEY LOO
            </div>
          <div className="links-wrapper">
            <HeaderButton name="Home" link="#homeSection" delay="200" />
            <HeaderButton name="About" link="#aboutSection" delay="350" />
            <HeaderButton name="Projects" link="#projectsSection" delay="500" />
            <HeaderButton name="Hobbies" link="#hobbiesSection" delay="650" />
            <HeaderButton name="Contact" link="#contactSection" delay="800" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;