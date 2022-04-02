import React from "react";
import Categories from "../components/Categories";
import ImageSlider from "../components/ImageSlider";
import Product from "../components/Product";
import { SliderData } from "../components/SliderData";
import "./home.css";

function Home() {
  return (
    <>
      <section className="first-section">
        <Categories />
        <ImageSlider slides={SliderData} />
      </section>
      <Product />
    </>
  );
}

export default Home;
