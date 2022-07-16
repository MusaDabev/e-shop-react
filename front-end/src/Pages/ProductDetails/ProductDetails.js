import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsFillShareFill, BsTelephoneFill } from "react-icons/bs"
import { MdCompareArrows, MdFavoriteBorder } from "react-icons/md"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
//import { publicRequest } from "../../requestMethods";

import { addProduct } from "../../redux/cartRedux";
import { addProductToFav } from "../../redux/favouriteRedux";
import { useDispatch } from "react-redux";


import "./productDetails.css";
import axios from "axios";

function ProductDetails() {

  const [phone, setPhone] = useState("Поръчай по телефона")

  window.scrollTo(0, 0);
  
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(
      addProduct({ ...product, quantity, color, size  })
    );
  };

 const handleAddToFvourites = () => {
  dispatch(
    addProductToFav({ ...product, quantity, color, size })
  );
 }


  const showPhone = () => {
    setPhone("+359 000 555 666")
  }


  return (
    <>
      {product && (
        <div className="product-details-container">
          <div className="images-container">
            <img
              src={product.img}
              alt={product.title}
              style={{ height: "350px", width: "400px" }}
            />
            <div className="more-images">
            <img
              src={product.img}
              alt={product.title}
              style={{ height: "100px", width: "100px" }}
            />
            <img
              src={product.img}
              alt={product.title}
              style={{ height: "100px", width: "100px" }}
            />
            <img
              src={product.img}
              alt={product.title}
              style={{ height: "100px", width: "100px" }}
            />
            </div>
          </div>

          <div className="details-container">
            <p className="item-title">{product.title}</p>
            <p
            
              className="item-discription"
            >
               {product.desc }
            </p>
            <div className="share-product">
                <BsFillShareFill style={{color: "#7B21F1"}} />
                <p>Сподели с приятел</p>
            </div>
            <div className="compare-and-fav">
              <div className="compare">
                  <MdCompareArrows style={{fontSize: "1.5rem"}} />
                  <p> Сравни </p>
              </div>
              <div className="fav">
                <MdFavoriteBorder style={{fontSize: "1.5rem"}}  />
                <p>Любими</p>
              </div>
            </div>
              <strong className="item-price">
                {product.price}
              </strong>
              <button className="add-to-cart" onClick={handleAddToCart}> <ShoppingCartIcon />  Добави в количка</button>
              
              <button className="phone-order" onClick={showPhone}> <BsTelephoneFill /> {phone}</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
