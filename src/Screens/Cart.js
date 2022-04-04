import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import './cart.css'

function Cart({ cart }) {
  

  const FilledCart = () => (
      <> 
    <div className="cart-item-container">
      { cart.line_items.map((item) => (
        
        <div key={item.id}>
         <CartItem item={item} />
        </div>
        
      ))}
      </div>
      <p>Общо: {cart.subtotal.formatted_with_symbol} </p>
      <Button>Изпразни количката</Button>
      <Button>Напред към плащане</Button>
    
    </>
  );

  const EmptyCart = () => {

    return (
        <p>The cart is empty,<Link to='/'>add products!</Link> </p>

    )
  }

  if (!cart.line_items) {
      return <p>Зареждане...</p>
  }

  return (
  <>
  <h1>Вашата количка</h1>
  {cart.line_items.length ? <FilledCart /> : <EmptyCart/>  }
  </>);
}

export default Cart;
