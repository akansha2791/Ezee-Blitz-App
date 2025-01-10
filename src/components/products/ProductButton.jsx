import React from 'react'
import { addToCart } from '../../features/cart/cartSlice'
import { removeFromCart } from '../../features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

const ProductButton = (props) => {
  const {product} = props
  const {cartItems} = useSelector((state) => state.cart)
  const isPresentInCart = Boolean(cartItems.find((item)=> {
      return item.id === product.id
  }))        
  
  const dispatch = useDispatch()
  const handleAddClick = () => {
     dispatch(addToCart(product))
  }
  const handleRemoveClick = () => {
      dispatch(removeFromCart(product))
  }
  return (
       (isPresentInCart)? (<button className='btn btn-outline-danger d-block w-100' onClick={handleRemoveClick}>Remove from Cart</button>)   
       :(<button className='btn btn-outline-success d-block w-100' onClick={handleAddClick}>Add To Cart</button>)
  )
}

export default ProductButton