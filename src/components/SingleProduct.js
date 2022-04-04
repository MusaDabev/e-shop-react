import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import {MdOutlineAddShoppingCart} from 'react-icons/md'

function SingleProduct({product, onAddToCart}) {
  return (
    <>
      <div className="most-selled-item">
        <Link to={`/products/`}>
          <img className="shop-item-image" src={product.image.url} alt="" />
        </Link>
        <p className="shop-item-title">{product.name}</p>
        <p dangerouslySetInnerHTML={{__html: product.description}} className="product-discription"></p>
        <div className="product-prices-and-discount">
          <strong className="shop-item-price">{product.price.formatted}</strong>
        </div>
        <Button LinkComponent={Link} to={`/products/`} variant="contained">
          More Details
        </Button>
        <MdOutlineAddShoppingCart onClick={ () => onAddToCart(product.id, 1)}  style={{fontSize: '2rem', cursor: 'pointer'}} />
      </div>
    </>
  );
}

export default SingleProduct;
