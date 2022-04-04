import { Button } from '@mui/material'
import React from 'react'
import './cartItem.css'


function CartItem({item}) {
  return (
    <div>
      <img className="cart-item-img" src={item.image.url} />
      <div className="cart-item-content">
          <h4>{item.name}</h4>
          <h5>{item.line_total.formatted_with_symbol}</h5>
      </div>
      <div className="cartActions">
          <Button>+</Button>
          <h5>{item.quantity}</h5>
          <Button>-</Button>
      </div>
      <Button>Премахни</Button>
    </div>

  )
}

export default CartItem
