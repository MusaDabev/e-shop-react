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
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";
import SearchResults from "./components/SearchResults/SearchResults";
import { Context } from "./components/Context";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
 
  const [sidebar, setSidebar] = useState(false)



  const [filteredData, setFilteredData] = useState([]);

 


  return (
    <div className="App">
       <Context.Provider value={{ filteredData, setFilteredData, sidebar, setSidebar }}>
      <Header  />
      
      <div className="content">
     
        <Routes>
          
            <Route
              exact
              path="/"
              element={
                <Home />
              }
            />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/cart"
              element={
                <Cart
                
                />
              }
              exact
            />
            <Route path="/registration" element={<Register />} />
            <Route
              path="/products/:id"
              element={<ProductDetails />}
            />
            <Route
              exact
              path="/checkout"
              element={
                <Checkout
                
                />
              }
            />
            <Route
              path="/search-results"
              element={<SearchResults />}
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
