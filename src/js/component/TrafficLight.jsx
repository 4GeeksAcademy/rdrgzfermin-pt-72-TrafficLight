import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  const changeColor = () => {
    if (color === "red") {
      setColor("yellow");
    } else if (color === "yellow") {
      setColor("green");
    } else {
      setColor("red");
    }
  };

  return (
    <div className="body">
      <div className="TrafficTop"></div>
      <div className="container">
        <div
          className={`red ${color === "red" ? "light-on-red" : ""}`}
          onClick={() => setColor("red")}
        ></div>
        <div
          className={`yellow ${color === "yellow" ? "light-on-yellow" : ""}`}
          onClick={() => setColor("yellow")}
        ></div>
        <div
          className={`green ${color === "green" ? "light-on-green" : ""}`}
          onClick={() => setColor("green")}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;
