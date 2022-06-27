import React from "react";

const SearchPopup = (props) => {
  return (
    <div
      className="searchPopup"
      style={{
        backgroundColor: props.color,
      }}
    >
      {props.character ? (
        <p>You found {props.character}!</p>
      ) : (
        <p>Keep searching!</p>
      )}
    </div>
  );
};

export default SearchPopup;
