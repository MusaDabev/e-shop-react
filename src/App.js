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
import Home from "./Screens/Home";
import ProductDetails from "./Screens/ProductDetails";
import { commerce } from "./lib/commerce";
import Cart from "./Screens/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();

    setCart(cart);
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart)


  }

  const handleCartQty = async (productId, quantity) => {

    const response = await commerce.cart.update(productId, {quantity})

    setCart(response.cart)

  }

  const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);

    setCart(response);
  }

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response)
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(products);
  console.log(cart);

  return (
    <div className="App">
      <Header totalItems={cart.total_items} />
      <NavBar></NavBar>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home products={products} onAddToCart={handleAddToCart} />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart
           cart={cart}
           handleCartQty = {handleCartQty}
           handleRemoveFromCart = {handleRemoveFromCart}
           handleEmptyCart = {handleEmptyCart}

           />} exact />
          <Route path="/registration" element={<Register />} />
          <Route path="/products/:id" element={<ProductDetails product={products} />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
