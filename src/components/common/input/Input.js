import React from "react";
import "./Input.css";

const Input = (props) => {
  const { id, value, onChange, type, name, placeholder, ...rest } = props;
  return (
    <div className="floatLabel">
      <input
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        {...rest}
      />
      <label className={value !== "" ? "active" : ""} htmlFor={id}>
        {placeholder}
      </label>
    </div>
  );
};

Input.defaultProps = {
  type: "text",
};

export default Input;
