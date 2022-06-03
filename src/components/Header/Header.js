import React from "react";
import "../../Styles/style.css";
import logo from "../../pictures/Drop.png";
import { Link, useLocation } from "react-router-dom";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchBar from "./SearchBar";
import NavBar from "../NavBar";

function Header({ totalItems, products }) {
  const location = useLocation();

  return (
    <header className="header">
      <NavBar />
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
     <SearchBar products={products} placeholder='Намери продукт'  />
      {location.pathname !== "/cart" && (
        <Link style={{ color: "black" }} to="/cart">
          <Badge badgeContent={totalItems} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </Link>
      )}

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
