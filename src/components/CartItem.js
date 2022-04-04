import { Button } from '@mui/material'
import React from 'react'
import './cartItem.css'


function CartItem({item, handleRemoveFromCart, handleCartQty}) {
  return (
    <div>
      <img className="cart-item-img" src={item.image.url} />
      <div className="cart-item-content">
          <h4>{item.name}</h4>
          <h5>{item.line_total.formatted_with_symbol}</h5>
      </div>
      <div className="cartActions">
          <Button onClick={() => handleCartQty(item.id, item.quantity + 1) }>+</Button>
          <h5>{item.quantity}</h5>
          <Button onClick={() => handleCartQty(item.id, item.quantity - 1) }>-</Button>
      </div>
      <Button className='remove-button' onClick={() => handleRemoveFromCart(item.id)}>Премахни</Button>
    </div>

  )
}

export default CartItem
