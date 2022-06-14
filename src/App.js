import React, { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import BackgroundImage from "./components/BackgroundImage";
import CharactersMenu from "./components/CharactersMenu";

function App() {
  const [playing, setPlaying] = useState(false);
  const [characters, setCharacters] = useState([
    { name: "Alex Mercer", found: false },
    { name: "Predator", found: false },
    { name: "Spider-Man", found: false },
    { name: "Sonic", found: false },
  ]);
  const [showCharacters, setShowCharacters] = useState(false);

  const startGame = () => {
    setPlaying(true);
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
        showCharacters={showCharacters}
        showCharactersList={showCharactersList}
        hideCharactersList={hideCharactersList}
      />
      {!playing && <Menu startGame={startGame} />}
      {showCharacters && (
        <CharactersMenu hideCharactersList={hideCharactersList} />
      )}
      <BackgroundImage
        playingState={playing}
        characters={characters}
        setCharacters={setCharacters}
      />
    </div>
  );
}

export default App;
