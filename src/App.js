import { Route, Routes } from "react-router-dom";

import { useState, useEffect } from "react";
import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Subscribe from "./components/Subscribe";
import Contacts from "./components/Contacts";
import NotFound from "./Screens/NotFound";
import NavBar from "./components/NavBar";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import { UserContext } from "./components/UserContext";
import Home from "./Screens/Home";
import ProductDetails from "./Screens/ProductDetails";
import { commerce } from "./lib/commerce";

function App() {

    const [products, setProducts] = useState([]);

    const fetchProducts =  async() => {
      const {data} = await commerce.products.list();

      setProducts(data);
    }

    useEffect(() => {

      fetchProducts();

    }, [])

    console.log(products);

  return (
    <div className="App">
      <Header />
      <NavBar></NavBar>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home products={products} />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Register />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
