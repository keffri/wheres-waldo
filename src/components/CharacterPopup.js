import React from "react";

const CharacterPopup = (props) => {
  return (
    <div
      className="characterPopup"
      style={{
        left: props.popupCoords.x,
        top: props.popupCoords.y,
      }}
    >
      <p></p>
    </div>
  );
};

export default CharacterPopup;
