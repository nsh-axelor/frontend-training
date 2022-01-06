import React from "react";
import "./Button.css";
const Button = ({ text, handleOnClick, disabled }) => {
  return (
    <button className="btn" onClick={handleOnClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
