import React from "react";
import db from "../Firebase";
import { collection, getDocs } from "firebase/firestore";

const CharacterPopup = (props) => {
  const findCharacter = (name) => {
    async function getCoordinates(db) {
      const coordsCol = collection(db, "coordinates");
      const coordsSnapshot = await getDocs(coordsCol);
      const coordsList = coordsSnapshot.docs.map((doc) => doc.data());
      return coordsList;
    }

    const coordsList = getCoordinates(db);

    let mouseX = props.mouseCoords.x;
    let mouseY = props.mouseCoords.y;

    let [selectedCharacter] = props.characters.filter((char) => {
      return char.name === name;
    });
    let removeCharArray = props.characters.filter((char) => {
      return char.name !== name;
    });

    if (
      mouseX >= selectedCharacter.coords[0].startX &&
      mouseX <= selectedCharacter.coords[1].endX &&
      mouseY >= selectedCharacter.coords[0].startY &&
      mouseY <= selectedCharacter.coords[1].endY
    ) {
      selectedCharacter.found = true;
      // alert(`You found ${selectedCharacter.name}!`);
      props.setSearchPopup({
        show: true,
        character: selectedCharacter.name,
        color: "#90ee90",
      });
      props.setCharacters([selectedCharacter, ...removeCharArray]);
      props.hideCharacterPopup();
      setTimeout(() => {
        props.setSearchPopup({
          show: false,
          character: undefined,
          color: undefined,
        });
      }, 1500);
      if (props.characters.every((char) => char.found)) {
        setTimeout(() => {
          props.setPlaying(false);
        }, 1750);
      }
    } else {
      props.setSearchPopup({
        show: true,
        character: undefined,
        color: "#FF7F7F",
      });
      props.hideCharacterPopup();
    }
    setTimeout(() => {
      props.setSearchPopup({
        show: false,
        character: undefined,
        color: undefined,
      });
    }, 1500);
  };

  return (
    <div
      className="characterPopup"
      style={{
        left: props.popupCoords.x,
        top: props.popupCoords.y,
      }}
    >
      {props.characters
        .filter((char) => {
          return char.found !== true;
        })
        .map((char) => {
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
