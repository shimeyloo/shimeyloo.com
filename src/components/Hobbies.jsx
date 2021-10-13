import React from "react";
import dog from "../images/hobbies/Meebo.png"

function EachHobby(props) {
  return (
    // Note: Project images are 4in x 4in, 72 px/in
    <div className="col-6 eachHobbySpacing">
      <img className="center" src={props.image} alt={props.name}></img>
    </div>
  );
}

function Hobbies() {
    return (
      <div class="section" id="hobbiesSection">
        <div class="container">
          <h2 class="title">H O B B I E S</h2>
          <p>Things I do for fun...</p>
          <div className="container" id="HobbiesSpacing">
            <div className="row ">
              <EachHobby name="Meebo" image={dog} />
              <EachHobby name="Meebo" image={dog} />
              <EachHobby name="Meebo" image={dog} />
              <EachHobby name="Meebo" image={dog} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Hobbies;