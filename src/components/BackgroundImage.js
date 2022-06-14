import React, { useState } from "react";
import findrimg from "../images/egorklyuchnyk.jpg";
import CharacterPopup from "./CharacterPopup";

const BackgroundImage = (props) => {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const [popupCoords, setPopupCords] = useState({ x: 0, y: 0 });
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseMove = (e) => {
    setMouseCoords({
      x: e.pageX,
      y: e.pageY,
    });
  };

  const showCharacterPopup = () => {
    setPopupCords({ x: mouseCoords.x, y: mouseCoords.y });
    setShowPopup(true);
  };

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
        onMouseMove={handleMouseMove}
        onClick={showCharacterPopup}
      />
      {showPopup && (
        <CharacterPopup
          popupCoords={popupCoords}
          characters={props.characters}
          setCharacters={props.setCharacters}
        />
      )}
    </div>
  );
};

export default BackgroundImage;
