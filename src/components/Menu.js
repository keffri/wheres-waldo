import React from "react";

const Menu = (props) => {
  return (
    <div className="menu">
      <h1 className="menu__title">Find these characters!</h1>
      <li className="menu__list">
        <ol>easy - alex mercer</ol>
        <ol>medium - predator</ol>
        <ol>hard - hell boy</ol>
        <ol>hardest - sonic</ol>
      </li>
      <button onClick={props.startGame}>Play!</button>
    </div>
  );
};

export default Menu;
