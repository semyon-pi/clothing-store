import React from 'react'
import {
  CartItemContainer,
  Img,
  ItemDetails,
  TextItem,
} from './cart-item.styles'

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem

  return (
    <CartItemContainer>
      <Img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <TextItem>{name}</TextItem>
        <TextItem>
          {quantity} x ${price}
        </TextItem>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem
