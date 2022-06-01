import React, { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import BackgroundImage from "./components/BackgroundImage";

function App() {
  const [playing, setPlaying] = useState(false);

  const startGame = () => {
    setPlaying(true);
  };

  return (
    <div className="app">
      <Header />
      {!playing && <Menu startGame={startGame} />}
      <BackgroundImage />
    </div>
  );
}

export default App;
