import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import "./singleProduct.css";

function SingleProduct({ product }) {
  return (
    <>
      <div className="most-selled-item">
        <img
          className="shop-item-image"
          src={product.img}
          alt={product.title}
        />

        <p className="shop-item-title">{product.title}</p>
        <p className="product-discription">{product.desc}</p>

        <div className="product-prices-and-add-to-cart">
          <strong className="shop-item-price">{product.price}</strong>
          <MdOutlineAddShoppingCart
            style={{ fontSize: "2rem", cursor: "pointer" }}
          />
        </div>
        <Link to={`/products/${product._id}`}>
          <p className="view-details">Детайли</p>
        </Link>
      </div>
    </>
  );
}

export default SingleProduct;
