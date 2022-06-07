import React from "react";
import alexmercer from "../images/alexmercer.jpg";
import predator from "../images/predator.jpg";
import spiderman from "../images/spiderman.jpg";
import sonic from "../images/sonic.jpg";

const CharactersMenu = (props) => {
  return (
    <div className="characterMenu">
      <h1 className="characterMenu__title">FIND THESE CHARACTERS!</h1>
      <li className="characterMenu__list">
        <ol className="characterMenu__item">
          <img
            className="characterMenu__image"
            src={alexmercer}
            alt="alexmercer"
          />
          <p className="characterMenu__item--text">Easy - Alex Mercer</p>
        </ol>
        <ol className="characterMenu__item">
          <img className="characterMenu__image" src={predator} alt="predator" />
          <p className="characterMenu__item--text">Medium - Predator</p>
        </ol>
        <ol className="characterMenu__item">
          <img
            className="characterMenu__image"
            src={spiderman}
            alt="spiderman"
          />
          <p className="characterMenu__item--text">Hard - Spider-Man</p>
        </ol>
        <ol className="characterMenu__item">
          <img className="characterMenu__image" src={sonic} alt="sonic" />
          <p className="characterMenu__item--text">Hardest - Sonic</p>
        </ol>
      </li>
      <button onClick={props.hideCharactersList}>Close</button>
    </div>
  );
};

export default CharactersMenu;
