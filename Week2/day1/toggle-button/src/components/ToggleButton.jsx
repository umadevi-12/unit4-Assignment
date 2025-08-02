import React, { useState } from "react";
import App from "../App";

const ToggleButton = ({ label = "" }) => {
  const [on, setOn] = useState(false);

  const toggle = () => {
    setOn(prev => !prev);
  };

  return (
    <button
      onClick={toggle}
      className={`toggle-button ${on ? "on" : "off"}`}
    >
      {label && <span>{label} </span>}
      {on ? "ON" : "OFF"}
    </button>
  );
};

export default ToggleButton;
