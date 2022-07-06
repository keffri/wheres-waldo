import React from "react";
import db from "../Firebase";
import { collection, getDocs } from "firebase/firestore";

const CharacterPopup = (props) => {
  async function getCoordinates(db) {
    const coordsCol = collection(db, "coordinates");
    const coordsSnapshot = await getDocs(coordsCol);
    const coordsList = coordsSnapshot.docs.map((doc) => doc.data());

    return coordsList;
  }

  const findCharacter = async (name) => {
    const coordsList = await getCoordinates(db).then((data) => data);

    let selectedCoords = coordsList.find(
      (char) => char.name === name
    ).coordinates;

    let mouseX = props.mouseCoords.x;
    let mouseY = props.mouseCoords.y;

    let [selectedCharacter] = props.characters.filter((char) => {
      return char.name === name;
    });

    let removeCharArray = props.characters.filter((char) => {
      return char.name !== name;
    });

    if (
      mouseX >= selectedCoords.startX &&
      mouseX <= selectedCoords.endX &&
      mouseY >= selectedCoords.startY &&
      mouseY <= selectedCoords.endY
    ) {
      selectedCharacter.found = true;
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
              onClick={() => {
                getCoordinates(db);
                findCharacter(char.name);
              }}
            >
              {char.name}
            </div>
          );
        })}
    </div>
  );
};

export default CharacterPopup;
