import React from "react";
import "./InputLabel.css";

const InputLabel = ({ label }) => {
  return (
    <div className="label" htmlFor="username">
      {label}
    </div>
  );
};

export default InputLabel;
