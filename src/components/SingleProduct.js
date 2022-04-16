import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import './singleProduct.css'

function SingleProduct({ product, onAddToCart }) {
  return (
    <>
      <div className="most-selled-item">
        <Link to={`/products/`}>
          <img className="shop-item-image" src={product.image.url} alt="" />
        </Link>
        <p className="shop-item-title">{product.name}</p>
        <p
          dangerouslySetInnerHTML={{ __html: product.description }}
          className="product-discription"
        ></p>
        <div className="product-prices-and-add-to-cart">
          <strong className="shop-item-price">{product.price.formatted}</strong>
          <MdOutlineAddShoppingCart
            onClick={() => onAddToCart(product.id, 1)}
            style={{ fontSize: "2rem", cursor: "pointer" }}
          />
        </div>
        
         
       
      </div>
    </>
  );
}

export default SingleProduct;
