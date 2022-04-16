import React, {useEffect, useState} from 'react'
import { commerce } from "../lib/commerce";
import { useParams } from "react-router-dom";

import './productDetails.css'

function ProductDetails() {

  const [product, setProduct] = useState(false);

  const {id} = useParams();

  const fetchProduct = async (id) => {
    
    const response = await commerce.products.retrieve(id);

    console.log(response);
    setProduct(response);
  }

  useEffect(() => {
    fetchProduct(id);
  }, [])
  return (
    <>
      { product && ( <div className="product-details-container">
        <img src={product.image.url} alt={product.name} style={{height: "250", width: '200px'}}/>
       <p className="shop-item-title">{product.name}</p>
       <p
          dangerouslySetInnerHTML={{ __html: product.description }}
          className="product-discription"
        ></p>
       <div className="product-prices-and-discount">
         <strong className="shop-item-price">{product.price.formatted}</strong>
      </div> 
      </div>)}
    </>
  )
}

export default ProductDetails
