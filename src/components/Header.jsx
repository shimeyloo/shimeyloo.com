import React from "react";

function HeaderButton(props) {
  return(
    <a href={props.link}>
      <button>{props.name}</button>
    </a>
  );
}

function Header() {
  return (
    <div class="section">
      <div class="container">
        <div class="navbar-wrapper">
          <div role="button" tabindex="0">SHIMEY LOO</div>
          <div class="links-wrapper">
            <HeaderButton name="Home" link="#homeSection" />
            <HeaderButton name="About" link="#aboutSection" />
            <HeaderButton name="Projects" link="#projectsSection" />
            <HeaderButton name="Hobbies" link="#hobbiesSection" />
            <HeaderButton name="Contact" link="#contactSection" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;