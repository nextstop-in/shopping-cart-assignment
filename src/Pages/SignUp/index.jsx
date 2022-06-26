import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextInput from "../../Components/FormInputs/TextInput";
import { StyledButton } from "../../Components/Button";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

const SignUp = (props) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { email, password, confirmPassword } = values;
  console.log({ values });
  const [error, setError] = useState({
    emailError: "",
    passwordError: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSignUp = () => {
    const userDetails = JSON.parse(localStorage.getItem("user")) || [];
    const isRegistered =
      userDetails.find((item) => item.email === email) || false;
    console.log({ userDetails });
    if (email && confirmPassword === password) {
      if (isRegistered) {
        setError({ ...error, emailError: "User already registered" });
      } else {
        userDetails.push({ email, password });
        localStorage.setItem("user", JSON.stringify(userDetails));
        localStorage.setItem("isAuthenticated", true);
        navigate("/");
      }
    } else if (confirmPassword && confirmPassword !== password) {
      setError({
        ...error,
        passwordError: "Password and Confirm Password are not equal",
      });
    }
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 2, mb: 5 }} variant="h3">
            SignUp
          </Typography>
          <Typography sx={{ mb: 4 }} variant="h7" component={"div"}>
            We do not share your personal details with anyone.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container fullWidth direction="column">
            <Grid item>
              <TextInput
                type="text"
                fullWidth
                name="fName"
                value={values.fName}
                label="First Name"
                onChange={handleChange}
                variant="standard"
              />
            </Grid>
            <Grid item>
              <TextInput
                type="text"
                fullWidth
                name="lName"
                value={values.lName}
                label="Last Name"
                onChange={handleChange}
                variant="standard"
              />
            </Grid>
            <Grid item>
              <TextInput
                type="email"
                fullWidth
                name="email"
                value={values.email}
                label="Email"
                onChange={handleChange}
                variant="standard"
              />
            </Grid>
            <Grid item>
              <TextInput
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                label="Password"
                variant="standard"
              />
            </Grid>
            <Grid item>
              <TextInput
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                label="Confirm Password"
                variant="standard"
              />
            </Grid>
            <Grid container>
              <StyledButton fullWidth onClick={handleSignUp} variant="standard">
                SignUp
              </StyledButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SignUp;
