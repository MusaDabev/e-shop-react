import { Route, Routes } from "react-router-dom";

import { useState, useEffect } from "react";
import React from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Subscribe from "./components/Subscribe/Subscribe";
import Contacts from "./Pages/Contacts/Contacts";
import NotFound from "./Pages/NotFound/NotFound";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import { commerce } from "./lib/commerce";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";
import SearchResults from "./components/SearchResults/SearchResults";
import { Context } from "./components/Context";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [sidebar, setSidebar] = useState(false)

  const [favourites, setFavourites] = useState([]);

  const [filteredData, setFilteredData] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();

    setCart(cart);
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);

    setCart(response);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response);
  };
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(products);
  console.log(cart);

  return (
    <div className="App">
       <Context.Provider value={{ filteredData, setFilteredData, sidebar, setSidebar }}>
      <Header totalItems={cart.total_items} products={products} />
      
      <div className="content">
     
        <Routes>
          
            <Route
              exact
              path="/"
              element={
                <Home products={products} onAddToCart={handleAddToCart} />
              }
            />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  handleCartQty={handleCartQty}
                  handleRemoveFromCart={handleRemoveFromCart}
                  handleEmptyCart={handleEmptyCart}
                />
              }
              exact
            />
            <Route path="/registration" element={<Register />} />
            <Route
              path="/products/:id"
              element={<ProductDetails product={products }  handleAddToCart={handleAddToCart}/>}
            />
            <Route
              exact
              path="/checkout"
              element={
                <Checkout
                  cart={cart}
                  order={order}
                  onCaptureCheckout={handleCaptureCheckout}
                  error={errorMessage}
                />
              }
            />
            <Route
              path="/search-results"
              element={<SearchResults onAddToCart={handleAddToCart} />}
            />
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="*" element={<NotFound />}></Route>
        
        </Routes>
      
      </div>
      <Subscribe />
      <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
