import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartButton = () => {
  const {cartItems} = useSelector((state) => state.cart)
  const navigate = useNavigate()
  const handleCartClick = () => {
    navigate("/cart")
  }
  // const items = ["Socks", "Hats"]
  const bgColorName = cartItems.length === 0 ? "none" : "white"
  
  return (
    <div>
      <button type = "button" className='btn btn-outline-success' onClick={handleCartClick}>
        <i className='bi bi-cart3'></i>
        <span className='mx-2'>Checkout</span>
        <span className={`badge bg-${bgColorName} text-success`}>{cartItems.length}</span>
      </button>
    </div>
  )
}

export default CartButton