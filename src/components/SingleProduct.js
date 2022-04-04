import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function SingleProduct({product}) {
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
      </div>
    </>
  );
}

export default SingleProduct;
