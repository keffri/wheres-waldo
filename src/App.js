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
    },
    {
      name: "Predator",
      found: false,
    },
    {
      name: "Spider-Man",
      found: false,
    },
    {
      name: "Sonic",
      found: false,
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
        setPlaying={setPlaying}
        characters={characters}
        setCharacters={setCharacters}
        time={time}
      />
    </div>
  );
}

export default App;
