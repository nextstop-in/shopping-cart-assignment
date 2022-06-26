import React from "react";
import Grid from "@mui/material/Grid";
import TextInput from "../../Components/FormInputs/TextInput";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "../../Components/Button";
import { Typography } from "@mui/material";

const Login = (props) => {
  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });
  const { email, password } = values;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleLogin = () => {
    const userDetails = JSON.parse(localStorage.getItem("user"));
    console.log({ userDetails });
    const isExistingUser =
      userDetails.find((item) => item.email === email) || false;
    if (isExistingUser && isExistingUser.password === password) {
      localStorage.setItem("isAuthenticated", true);
      navigate("/");
    }
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 2, mb: 5 }} variant="h3">
            Login
          </Typography>
          <Typography variant="h7">
            Get access to your Orders. Wishlist and Recommendations.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container fullWidth direction="column">
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
            <Grid container>
              <StyledButton fullWidth onClick={handleLogin} variant="standard">
                Login
              </StyledButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
