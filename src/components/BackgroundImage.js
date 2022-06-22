import React, { useState } from "react";
import findrimg from "../images/egorklyuchnyk.jpg";
import CharacterPopup from "./CharacterPopup";
import Results from "./Results";

const BackgroundImage = (props) => {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const [popupCoords, setPopupCords] = useState({ x: 0, y: 0 });
  const [showPopup, setShowPopup] = useState(false);
  // const [showResults, setShowResults] = useState(false);

  const handleMouseMove = (e) => {
    setMouseCoords({
      x: e.pageX,
      y: e.pageY,
    });
  };

  const showCharacterPopup = () => {
    if (props.characters.length === 0) {
      return;
    }
    setPopupCords({ x: mouseCoords.x, y: mouseCoords.y });
    setShowPopup(true);
  };

  const hideCharacterPopup = () => {
    setShowPopup(false);
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
      {!props.playingState && <Results time={props.time} />}
      {showPopup && (
        <CharacterPopup
          setPlaying={props.setPlaying}
          popupCoords={popupCoords}
          characters={props.characters}
          setCharacters={props.setCharacters}
          hideCharacterPopup={hideCharacterPopup}
          mouseCoords={mouseCoords}
        />
      )}
    </div>
  );
};

export default BackgroundImage;
