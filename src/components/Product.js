import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";


import { Link } from "react-router-dom";

import "../Styles/style.css";

import photo from "../pictures/products/0_1356060.jpg";
import heart from "../icons/Heart-SG2001-transparent.png";
import secHeart from "../icons/video_image-Bz5ouo4Jn.jpg";


function Render(props) {
  const { id, image_src, name, description, price } = props;

  const [heart, setHeart] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/1/1e/Heart-SG2001-transparent.png"
  );

  const [isClicked, setIsClicked] = useState(false);

  function clicked () {
    setIsClicked(!isClicked)
  if (isClicked) {
    setHeart('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Love_Heart_symbol.svg/1200px-Love_Heart_symbol.svg.png')
  } else {
    setHeart('https://upload.wikimedia.org/wikipedia/commons/1/1e/Heart-SG2001-transparent.png')
  }
 

  }

  

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
          <button onClick={clicked} className="fav" id="like-button">
            <img className="red-heart-img" src={heart} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Product() {

  const [products, setProducts] = useState([]);
  

  const {isLoading, setIsLoading} = useContext(UserContext);

  useEffect (() => {
    fetch('http://localhost:5000/products').then( res => res.json()).then((result) => {
      setProducts(result)
      setIsLoading(false)
     
    })
  }, []) 

  return (
    <div className="most-selled-container">
      {products.map((product) => {

        //  <Render {...products[0]}
        // const {id, name, description, image_src, price} = product;
        // <Render key={product.id} id={id} name={name} description={description} image_src={image_src} price={price} />

        return  <Render key={product.id} {...product} />
        })}

    </div>
  );
}

export default Product;
