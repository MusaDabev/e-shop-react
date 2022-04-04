import React from "react";
import Categories from "../components/Categories";
import ImageSlider from "../components/ImageSlider";
import Product from "../components/Products";
import { SliderData } from "../components/SliderData";
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
