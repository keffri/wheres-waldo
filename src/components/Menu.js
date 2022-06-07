import React from "react";
import alexmercer from "../images/alexmercer.jpg";
import predator from "../images/predator.jpg";
import spiderman from "../images/spiderman.jpg";
import sonic from "../images/sonic.jpg";

const Menu = (props) => {
  return (
    <div className="menu">
      <h1 className="menu__title">FIND THESE CHARACTERS!</h1>
      <li className="menu__list">
        <ol className="menu__item">
          <img className="menu__image" src={alexmercer} alt="alexmercer" />
          <p className="menu__item--text">Easy - Alex Mercer</p>
        </ol>
        <ol className="menu__item">
          <img className="menu__image" src={predator} alt="predator" />
          <p className="menu__item--text">Medium - Predator</p>
        </ol>
        <ol className="menu__item">
          <img className="menu__image" src={spiderman} alt="spiderman" />
          <p className="menu__item--text">Hard - Spider-Man</p>
        </ol>
        <ol className="menu__item">
          <img className="menu__image" src={sonic} alt="sonic" />
          <p className="menu__item--text">Hardest - Sonic</p>
        </ol>
      </li>
      <button onClick={props.startGame}>Play!</button>
    </div>
  );
};

export default Menu;
