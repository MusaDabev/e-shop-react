import React from "react";
import "../Styles/style.css";
import logo from "../pictures/Drop.png";
import searchLogo from "../pictures/search-solid.svg";
import { Link, useLocation } from "react-router-dom";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header({totalItems}) {

  const location = useLocation();

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
      {location.pathname !== '/cart' && (<Link style={{color: "black"}} to="/cart">
      <Badge badgeContent={totalItems} color="primary">
      <ShoppingCartIcon/>
      </Badge>
      </Link>)}
      
      
      

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
