import React from "react";
import Stopwatch from "./Stopwatch";

const Header = (props) => {
  const charsFound = props.characters.every((char) => char.found);

  let button;
  if (props.playingState) {
    if (!props.showCharacters) {
      button = (
        <button onClick={props.showCharactersList}>Show Characters</button>
      );
    } else {
      button = (
        <button onClick={props.hideCharactersList}>Hide Characters</button>
      );
    }
  }

  return (
    <header className="header">
      <h1 className="header__title">findr</h1>
      {!charsFound ? button : null}
      <Stopwatch
        playing={props.playingState}
        time={props.time}
        setTime={props.setTime}
      />
    </header>
  );
};

export default Header;
