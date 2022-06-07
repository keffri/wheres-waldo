import React from "react";
import Stopwatch from "./Stopwatch";

const Header = (props) => {
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
      {button}
      <Stopwatch playing={props.playingState} />
    </header>
  );
};

export default Header;
