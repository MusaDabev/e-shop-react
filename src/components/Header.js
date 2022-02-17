import React from "react";
import '../Styles/style.css'
import logo from '../pictures/Drop.png'
import shoppingCartLogo from '../pictures/shopping-cart-solid.svg';
import searchLogo from '../pictures/search-solid.svg';

function Header() {
    return (
        <div className="header">
          <div className="menu-btn">
        <div className="menu-btn-burger"></div>
      </div>
      <a href="index.html">
        <img className="logo" src={logo} alt="logo"
      /></a>
      <div className="wrapper">
        <div className="search-box">
          <input type="text" className="input-search" placeholder="Търсене" />

          <button className="search-btn">
            <img src={searchLogo} alt="" />
          </button>
        </div>
      </div>
      <div className="shopping-cart">
        <a href="cart.html">
          <p>Количка</p>
          <img
            className="shopping-cart-logo"
            src={shoppingCartLogo}
            alt="shopping cart"
          />
        </a>
      </div>

      <a className="registration-link" href="registration.html">Регистрация</a>
      <div className="login-btn">
        <button>Вход</button>
      </div>
        </div>
    )
}

export default Header