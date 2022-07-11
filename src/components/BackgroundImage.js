import React, { useState, useRef } from "react";
import findrimg from "../images/egorklyuchnyk.jpg";
import CharacterPopup from "./CharacterPopup";
import Results from "./Results";
import SearchPopup from "./SearchPopup";

const BackgroundImage = (props) => {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const [popupCoords, setPopupCords] = useState({ x: 0, y: 0 });
  const [showPopup, setShowPopup] = useState(false);
  const [searchPopup, setSearchPopup] = useState({
    show: false,
    character: undefined,
    color: undefined,
  });
  const [showResults, setShowResults] = useState(false);
  const [backgroundDimensions, setBackgroundDimensions] = useState({
    height: undefined,
    width: undefined,
  });

  const elementRef = useRef(null);
  // console.log(elementRef.current?.clientHeight);

  const getDimensions = () => {
    setBackgroundDimensions({
      height: elementRef.current.clientHeight,
      width: elementRef.current.clientWidth,
    });
  };

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

    if (
      mouseCoords.y >= backgroundDimensions.height - 120 &&
      mouseCoords.x >= backgroundDimensions.width - 100
    ) {
      setPopupCords({ x: mouseCoords.x - 100, y: mouseCoords.y - 120 });
    } else if (mouseCoords.x >= backgroundDimensions.width - 100) {
      setPopupCords({ x: mouseCoords.x - 100, y: mouseCoords.y });
    } else if (mouseCoords.y >= backgroundDimensions.height - 120) {
      setPopupCords({ x: mouseCoords.x, y: mouseCoords.y - 120 });
    } else {
      setPopupCords({ x: mouseCoords.x, y: mouseCoords.y });
    }

    setShowPopup(true);
  };

  const hideCharacterPopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="backgroundImage">
      <img
        ref={elementRef}
        style={{
          filter: !props.playingState ? "brightness(30%)" : "brightness(100%)",
          pointerEvents: !props.playingState ? "none" : "auto",
        }}
        className="findr"
        src={findrimg}
        alt="test"
        onMouseMove={handleMouseMove}
        onClick={() => {
          showCharacterPopup();
          getDimensions();
        }}
      />
      {showResults && <Results time={props.time} />}
      {searchPopup.show && (
        <SearchPopup
          character={searchPopup.character}
          color={searchPopup.color}
        />
      )}
      {showPopup && (
        <CharacterPopup
          setPlaying={props.setPlaying}
          popupCoords={popupCoords}
          characters={props.characters}
          setCharacters={props.setCharacters}
          hideCharacterPopup={hideCharacterPopup}
          mouseCoords={mouseCoords}
          setSearchPopup={setSearchPopup}
          setShowResults={setShowResults}
          backgroundDimensions={backgroundDimensions}
        />
      )}
    </div>
  );
};

export default BackgroundImage;
