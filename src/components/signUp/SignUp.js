import React, { useState } from "react";
import Input from "../common/input/Input";
import "./signup.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { fName, lName, email, password, confirmPassword } = state;

  const handleTextChange = (event) => {
    const { name, value } = event.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUpClick = () => {
    navigate("/home");
  };

  return (
    <section className="signUpContainer">
      <div className="titleContainer">
        <div className="title">Signup</div>
        <div className="subtitle">
          We do not share your personal details with anyone.
        </div>
      </div>
      <form onSubmit={handleSignUpClick} className="inputContainer">
        <Input
          placeholder="First Name"
          id="fName"
          name="fName"
          value={fName}
          onChange={handleTextChange}
          required
        />
        <Input
          placeholder="Last Name"
          id="lName"
          name="lName"
          value={lName}
          onChange={handleTextChange}
          required
        />
        <Input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={handleTextChange}
          required
        />
        <Input
          placeholder="Password"
          id="password"
          name="password"
          value={password}
          onChange={handleTextChange}
          type="password"
          required
        />
        <Input
          placeholder="Confirm Password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleTextChange}
          type="password"
          required
        />
        <button type="submit">Signup</button>
      </form>
    </section>
  );
};

export default SignUp;
