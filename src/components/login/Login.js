import React, { useState } from "react";
import Input from "../common/input/Input";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginData;
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log({ name, value });
    setLoginData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleLoginClick = () => {
    navigate("/home");
  };

  return (
    <section className="loginContainer">
      <div className="titleContainer">
        <div className="title">Login</div>
        <div className="subtitle">
          Get access to your Orders, Wishlist and Recommendations
        </div>
      </div>
      <form onSubmit={handleLoginClick} className="inputContainer">
        <Input
          name="email"
          placeholder="Email"
          id="email"
          value={email}
          type="email"
          onChange={handleChange}
          required
        />
        <Input
          name="password"
          placeholder={"Password"}
          id={"password"}
          value={password}
          onChange={handleChange}
          type="password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default Login;
