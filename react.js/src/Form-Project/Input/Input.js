import React from "react";
import InputLabel from "../InputLabel";

const Input = ({
  classes,
  label,
  type,
  name,
  value,
  placeholder,
  handleChange,
  isRequired,
  optionLabel,
}) => {
  return (
    <div className={[classes]}>
      {label ? <InputLabel label={label} /> : ''}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        required={isRequired}
      />
      {optionLabel ? (
        <>
          <label htmlFor="">{optionLabel}</label>
          <br />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Input;
