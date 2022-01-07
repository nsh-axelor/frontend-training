import React from "react";
import InputLabel from "../InputLabel";

const Input = ({
  classes,
  label,
  type,
  name,
  value,
  placeholder,
  isRequired,
  optionLabel,
  inputRef,
  handleClick
}) => {
  return (
    <div className={[classes]}>
      {label ? <InputLabel label={label} /> : ''}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={isRequired}
        ref={inputRef}
        onClick={handleClick}
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
