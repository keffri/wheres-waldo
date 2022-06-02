import React from "react";
import findrimg from "../images/egorklyuchnyk.jpg";

const BackgroundImage = (props) => {
  return (
    <div className="backgroundImage">
      <img
        style={{
          filter: !props.playingState ? "brightness(30%)" : "brightness(100%)",
          pointerEvents: !props.playingState ? "none" : "auto",
        }}
        className="findr"
        src={findrimg}
        alt="test"
      />
    </div>
  );
};

export default BackgroundImage;
