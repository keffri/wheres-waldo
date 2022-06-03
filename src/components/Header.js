import React from "react";
import Stopwatch from "./Stopwatch";

const Header = (props) => {
  return (
    <header className="header">
      <h1 className="header__title">findr</h1>
      <Stopwatch playing={props.playingState} />
    </header>
  );
};

export default Header;
