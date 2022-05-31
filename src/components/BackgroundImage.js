import React from "react";
import findrimg from "../images/egorklyuchnyk.jpg";

const BackgroundImage = () => {
  return (
    <div className="backgroundImage">
      <img className="findr" src={findrimg} alt="test" />
    </div>
  );
};

export default BackgroundImage;
