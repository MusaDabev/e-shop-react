import React, {useState, useEffect}from "react";
import Categories from "../../components/Categories/Categories";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Product from "../../components/Products/Products";
import { SliderData } from "../../components/ImageSlider/SliderData";
import "./home.css";
import axios from 'axios';

function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
         
          "http://localhost:5000/api/products"

        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, []);
  
  return (
    <>
      <section className="first-section">
        <Categories />
        <ImageSlider slides={SliderData} />
      </section>
      <Product products={products} />
    </>
  );
}

export default Home;
