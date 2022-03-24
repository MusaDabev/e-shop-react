import React from "react";
import "../Styles/style.css";
import logo from "../pictures/Drop.png";
import shoppingCartLogo from "../pictures/shopping-cart-solid.svg";
import searchLogo from "../pictures/search-solid.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <div className="wrapper">
        <div className="search-box">
          <input type="text" className="input-search" placeholder="Търсене" />

          <button className="search-btn">
            <img src={searchLogo} alt="" />
          </button>
        </div>
      </div>
      <div className="shopping-cart">
        <Link to="/cart">
          <p>Количка</p>
          <img
            className="shopping-cart-logo"
            src={shoppingCartLogo}
            alt="shopping cart"
          />
        </Link>
      </div>

      <Link to="/registration" className="registration-link">
       
        Регистрация
      </Link>
      <div className="login-btn">
        <Link to="/login">
          
          <button>Вход</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
