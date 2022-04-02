import React, { useState, useEffect, } from "react";
import Button from '@mui/material/Button';


import { Link } from "react-router-dom";

import "../Styles/style.css";




function Render(props) {
  const { id, image_src, name, description, price } = props;


  return (
    <div>
      <div className="most-selled-item" key={id}>
        <Link to={`/product${id}`}>
          <img className="shop-item-image" src={image_src} alt="" />
        </Link>
        <p className="shop-item-title">{name}</p>
        <p className="product-discription">{description}</p>
        <div className="product-prices-and-discount">
          <strong className="shop-item-price">{price}</strong>
        </div>
        <Button LinkComponent={Link} to={`/products/${id}`} variant="contained">More Details</Button>
      </div>
    </div>
  );
}

function Product() {

  const [products, setProducts] = useState([]);
  
  useEffect (() => {
    fetch('http://localhost:5000/products').then( res => res.json()).then((result) => {
      setProducts(result)
    })
  }, []) 

  return (
    <>
    <h2 className="most-selled-heading" >Най - продавани</h2>
    <div className="most-selled-container">
     
      {products.map((product) => {

        //  <Render {...products[0]}
        // const {id, name, description, image_src, price} = product;
        // <Render key={product.id} id={id} name={name} description={description} image_src={image_src} price={price} />

        return  <Render key={product.id} {...product} />
        })}

    </div>
    </>
  );
}

export default Product;
