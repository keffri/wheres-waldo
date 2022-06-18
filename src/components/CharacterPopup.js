import React from "react";

const CharacterPopup = (props) => {
  const findCharacter = (name) => {
    let mouseX = props.mouseCoords.x;
    let mouseY = props.mouseCoords.y;

    let [selectedCharacter] = props.characters.filter((char) => {
      return char.name === name;
    });
    let removeCharArray = props.characters.filter((char) => {
      return char.name !== name;
    });

    // console.log(removeCharArray);
    if (
      mouseX >= selectedCharacter.coords[0].startX &&
      mouseX <= selectedCharacter.coords[1].endX &&
      mouseY >= selectedCharacter.coords[0].startY &&
      mouseY <= selectedCharacter.coords[1].endY
    ) {
      selectedCharacter.found = true;
      alert(`You found ${selectedCharacter.name}!`);
      props.setCharacters([...removeCharArray]);
      props.hideCharacterPopup();
    } else {
      alert("Keep searching!");
      props.hideCharacterPopup();
    }
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
