import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem.js";
import './cart.css'
import {useDispatch, useSelector} from 'react-redux';

function Cart() {

  const cart = useSelector((state) => state.cart);
  console.log(cart)
  const dispatch = useDispatch();
  

  const FilledCart = () => (
      <> 
    <div className="cart-item-container">
      { cart.products.map((item) => (
        
        <div key={item._id}>
         <CartItem item={item}   />
        </div>
        
      ))}
      </div>
      <div className="subtotal-andButtons">
      <p>Общо:  </p>
      <Button>Изпразни количката</Button>
      <Button LinkComponent={Link} to="/checkout">Напред към плащане</Button>
      </div>
      
    
    </>
  );

  const EmptyCart = () => {

    return (
        <p>The cart is empty,<Link to='/'>add products!</Link> </p>

    )
  }

  if (!cart.products) {
      return <p>Зареждане...</p>
  }

  return (
  <div className="cart-container">
  <h1>Вашата количка</h1>
  {cart.products.length ? <FilledCart /> : <EmptyCart/>  }
  </div>);
}

export default Cart;
