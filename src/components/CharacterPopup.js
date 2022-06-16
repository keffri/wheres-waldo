import React from "react";

const CharacterPopup = (props) => {
  const findCharacter = (name) => {
    props.setCharacters(props.characters.filter((char) => char.name !== name));
    props.hideCharacterPopup();
  };

  return (
    <div
      className="characterPopup"
      style={{
        left: props.popupCoords.x,
        top: props.popupCoords.y,
      }}
    >
      {props.characters.map((char) => {
        return (
          <div
            key={char.name}
            className="characterPopup__selector"
            onClick={() => findCharacter(char.name)}
          >
            {char.name}
          </div>
        );
      })}
    </div>
  );
};

export default CharacterPopup;
