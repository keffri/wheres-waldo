import React from "react";

const Results = (props) => {
  return (
    <div className="results">
      <p>Congratulations, you found all the characters!</p>
      <p>
        Your time was:{" "}
        <span>
          {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)} :{" "}
        </span>
        <span>{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)} : </span>
        <span>{("0" + ((props.time / 10) % 100)).slice(-2)}</span>
      </p>
    </div>
  );
};

export default Results;
