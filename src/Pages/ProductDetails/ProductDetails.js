import React, { useEffect, useState } from "react";
import { commerce } from "../../lib/commerce";
import { useParams } from "react-router-dom";
import { BsFillShareFill, BsTelephoneFill } from "react-icons/bs"
import { MdCompareArrows, MdFavoriteBorder } from "react-icons/md"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


import "./productDetails.css";

function ProductDetails() {
  const [product, setProduct] = useState(false);

  const { id } = useParams();

  const fetchProduct = async (id) => {
    const response = await commerce.products.retrieve(id);

    console.log(response);
    setProduct(response);
  };

  useEffect(() => {
    fetchProduct(id);
  }, []);
  return (
    <>
      {product && (
        <div className="product-details-container">
          <div className="images-container">
            <img
              src={product.image.url}
              alt={product.name}
              style={{ height: "350px", width: "400px" }}
            />
            <div className="more-images">
            <img
              src={product.image.url}
              alt={product.name}
              style={{ height: "100px", width: "100px" }}
            />
            <img
              src={product.image.url}
              alt={product.name}
              style={{ height: "100px", width: "100px" }}
            />
            <img
              src={product.image.url}
              alt={product.name}
              style={{ height: "100px", width: "100px" }}
            />
            </div>
          </div>

          <div className="details-container">
            <p className="item-title">{product.name}</p>
            <p
              dangerouslySetInnerHTML={{ __html: product.description }}
              className="item-discription"
            ></p>
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
                {product.price.formatted}
              </strong>
              <button className="add-to-cart"> <ShoppingCartIcon />  Добави в количка</button>
              
              <button className="phone-order"> <BsTelephoneFill /> Поръчай по телефона</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
