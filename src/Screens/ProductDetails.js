import React from 'react'
import { useParams } from 'react-router-dom';

import './productDetails.css'

function ProductDetails({product}) {

  const  id = useParams().id;

  return (
    <>
      { product && ( <div className="product-details-container">
        <img src={product.image_src} alt={product.name} style={{height: "250", width: '200px'}}/>
       <p className="shop-item-title">{product.name}</p>
       <p className="product-discription">{product.description}</p>
       <div className="product-prices-and-discount">
         <strong className="shop-item-price">{product.price}</strong>
      </div> 
      </div>)}
    </>
  )
}

export default ProductDetails
