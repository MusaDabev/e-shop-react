import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { useState, useEffect } from "react";

import Product from "./components/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Subscribe from "./components/Subscribe";
import Contacts from "./components/Contacts";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import Login from "./Screens/Login";
import Register from "./components/Register";
import {UserContext} from './components/UserContext'
import Loading from './components/Loading'



function App() {


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
  }, 5000)
  })
  

  return (
    <BrowserRouter>
      <div className="App">
       <Header />
      <NavBar></NavBar>
        <div className="content">
        <UserContext.Provider value={{isLoading, setIsLoading}}>
          <Routes>
           
             <Route exact path="/" element={ isLoading ? <Loading/> : <Product />} />
             <Route  path="/contacts" element={<Contacts />} />
             <Route  path="/login" element={<Login />} />
             <Route  path="/registration" element={<Register />} />
             <Route path="*" element={<NotFound />}></Route>
         
          </Routes>
          </UserContext.Provider>
        </div>
        <Subscribe />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
