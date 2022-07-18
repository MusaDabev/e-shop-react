import React from "react";
import Categories from "../../components/Categories/Categories";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Product from "../../components/Products/Products";
import { SliderData } from "../../components/ImageSlider/SliderData";
import "./home.css";

function Home({products, onAddToCart}) {

  
  return (
    <>
      <section className="first-section">
        <Categories />
        <ImageSlider slides={SliderData} />
      </section>
      <Product products={products} onAddToCart={onAddToCart} />
    </>
  );
}

export default Home;
