import React from "react";
import { BiMessageRoundedDots } from "react-icons/bi";

import "../Styles/style.css";
import "./product.css"
import SingleProduct from "./SingleProduct";



function Products({products}) {
  

  return (
    <>
      <div className="headingAndMessage">
        <h2 className="most-selled-heading">Най - продавани</h2>
        <BiMessageRoundedDots className="message-icon"></BiMessageRoundedDots>
      </div>
      <div className="most-selled-container">
        {products.map((product) => {

          return <SingleProduct key={product.id} product={product} />;

        })}
      </div>
    </>
  );
}

export default Products;
