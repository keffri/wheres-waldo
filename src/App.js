import React, { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import BackgroundImage from "./components/BackgroundImage";
import CharactersMenu from "./components/CharactersMenu";

function App() {
  const [playing, setPlaying] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [time, setTime] = useState(0);
  const [characters, setCharacters] = useState([
    {
      name: "Alex Mercer",
      found: false,
      coords: [
        { startX: 1690, startY: 1020 },
        { endX: 1795, endY: 1175 },
      ],
    },
    {
      name: "Predator",
      found: false,
      coords: [
        { startX: 1750, startY: 5340 },
        { endX: 1835, endY: 5470 },
      ],
    },
    {
      name: "Spider-Man",
      found: false,
      coords: [
        { startX: 1180, startY: 7455 },
        { endX: 1270, endY: 7525 },
      ],
    },
    {
      name: "Sonic",
      found: false,
      coords: [
        { startX: 620, startY: 6375 },
        { endX: 675, endY: 6420 },
      ],
    },
  ]);

  const [showCharacters, setShowCharacters] = useState(false);

  const startGame = () => {
    setPlaying(true);
    setShowMenu(false);
  };

  const showCharactersList = () => {
    setShowCharacters(true);
  };

  const hideCharactersList = () => {
    setShowCharacters(false);
  };

  return (
    <div className="app">
      <Header
        playingState={playing}
        setPlaying={setPlaying}
        showCharacters={showCharacters}
        showCharactersList={showCharactersList}
        hideCharactersList={hideCharactersList}
        time={time}
        setTime={setTime}
        characters={characters}
      />
      {showMenu && <Menu startGame={startGame} />}
      {showCharacters && (
        <CharactersMenu
          hideCharactersList={hideCharactersList}
          characters={characters}
        />
      )}
      <BackgroundImage
        playingState={playing}
        characters={characters}
        setCharacters={setCharacters}
        time={time}
      />
    </div>
  );
}

export default App;
