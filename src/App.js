import {
  Route,
  Routes,
} from "react-router-dom";

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
import {UserContext} from './components/UserContext'
import Home from "./Screens/Home";
import ProductDetails from "./Screens/ProductDetails";



function App() {


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
  }, 5000)
  })
  

  return (
      <div className="App">
       <Header />
      <NavBar></NavBar>
        <div className="content">
        <UserContext.Provider value={{isLoading, setIsLoading}}>
          <Routes>
           
             <Route exact path="/" element={ <Home />} />
             <Route  path="/contacts" element={<Contacts />} />
             <Route  path="/login" element={<Login />} />
             <Route  path="/registration" element={<Register />} />
             <Route  path="/products/:id" element={<ProductDetails />} />
             <Route path="*" element={<NotFound />}></Route>
         
          </Routes>
          </UserContext.Provider>
        </div>
        <Subscribe />
        <Footer />
      </div>
  );
}

export default App;
