import React from "react";
import TextField from "@mui/material/TextField";

const TextInput = (props) => {
  const { type, onChange, name, label, onBlur, variant } = props;
  return (
    <TextField
      sx={{ mb: 5 }}
      type={type}
      name={name}
      autoComplete="off"
      fullWidth
      label={label}
      id="outlined"
      onChange={onChange}
      onBlur={onBlur}
      variant={variant}
    />
  );
};

export default TextInput;
