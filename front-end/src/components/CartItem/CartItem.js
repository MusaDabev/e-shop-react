import { Button } from '@mui/material'
import React from 'react'
import './cartItem.css'


function CartItem({item}) {
  return (
    <div>
      <img className="cart-item-img" src={item.img} />
      <div className="cart-item-content">
          <h4>{item.title}</h4>
          <h5>{item.price}</h5>
      </div>
      <div className="cartActions">
          <Button>+</Button>
          <h5>{item.quantity}</h5>
          <Button>-</Button>
      </div>
      <Button className='remove-button'>Премахни</Button>
    </div>

  )
}

export default CartItem
