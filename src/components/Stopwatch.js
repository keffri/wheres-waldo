import React, { useEffect } from "react";

const Stopwatch = (props) => {
  const { playing, setTime } = props;
  useEffect(() => {
    let interval = null;

    if (playing) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [playing, setTime]);

  return (
    <div>
      <span>{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)} : </span>
      <span>{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)} : </span>
      <span>{("0" + ((props.time / 10) % 100)).slice(-2)}</span>
    </div>
  );
};

export default Stopwatch;
