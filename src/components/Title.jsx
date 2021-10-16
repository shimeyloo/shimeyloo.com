import React from "react";

function Title(props) {
  return (
    <div>
        <h2 className="title" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
          {props.text}
        </h2>
    </div>
  );
}

export default Title;