import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './productDetails.css'

function ProductDetails() {

  const  id = useParams().id;

const [products, setProducts] = useState();

useEffect(  () => {
  const fetchHandler = async () => {await fetch(`http://localhost:5000/products/${id}`)
  .then(((res)  => res.json()))
  .then((data) => setProducts(data))}  

  fetchHandler();
}, [id])
  return (
    <>
      { products && ( <div className="product-details-container">
        <img src={products.image_src} alt={products.name} style={{height: "250", width: '200px'}}/>
       <p className="shop-item-title">{products.name}</p>
       <p className="product-discription">{products.description}</p>
       <div className="product-prices-and-discount">
         <strong className="shop-item-price">{products.price}</strong>
      </div> 
      </div>)}
    </>
  )
}

export default ProductDetails
