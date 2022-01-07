import React from "react";
import InputLabel from "../InputLabel";

const Select = ({ name, label, defaultValue, handleChange, options, inputRef }) => {
  return (
    <div className="input">
      <InputLabel label={label} />

      <select name={name} defaultValue={defaultValue} ref={inputRef}>
        <option value="default" disabled>
          Choose Your Server
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
