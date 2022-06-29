import React from "react";
import { Link } from "react-router-dom";
import { useWindowSize } from "../../../Hooks";
import cartIcon from "../../../static/images/cart.svg";
import shopIcon from "../../../static/images/logo.png";
import "./Header.css";

const Header = (props) => {
  const { totalCartItems, handleCartClick } = props;
  const size = useWindowSize();

  return (
    <header className="headerContainer">
      <img src={shopIcon} alt="sabka_bazaar" />
      {size.width >= 750 && (
        <div className="rightContainer">
          <Link className="link" to="/home">
            Home
          </Link>
          <Link className="link" to="/products">
            Products
          </Link>
        </div>
      )}
      <div className="leftContainer">
        <Link className="link" to="/">
          SignIn
        </Link>
        <Link className="link" to="/signUp">
          Register
        </Link>
        <div className="cartContainer">
          <button onClick={handleCartClick}>
            <img src={cartIcon} alt="cart" />
          </button>
          <span>{totalCartItems} items</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
