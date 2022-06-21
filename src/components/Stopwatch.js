import React, { useState, useEffect } from "react";

const Stopwatch = (props) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (props.playing) {
      interval = setInterval(() => {
        props.setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [props.playing]);

  return (
    <div>
      <span>{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)} : </span>
      <span>{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)} : </span>
      <span>{("0" + ((props.time / 10) % 100)).slice(-2)}</span>
    </div>
  );
};

export default Stopwatch;
