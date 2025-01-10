import React from 'react'
import NoContent from '../components/extra/NoContent'
import data from '../data'
import CartItem from '../components/cart/CartItem'
import CartBuyButton from '../components/cart/CartBuyButton'
import CartNumbers from '../components/cart/CartNumbers'
import { useSelector } from 'react-redux'
const Cart = () => {
  // const cartItems = data.slice(0,2)
  const {cartItems} = useSelector((state) => state.cart)
  if(cartItems.length === 0){
    return <NoContent text = "Nothing in your cart" btnText = "Browse Products"/>
   }
  return (
    <div className='row py-3'>
    <div className='col-12 col-md-10 col-xl-8 mx-auto'>
      <div id='cart' className='border p-3 bg-white text-dark my-3 my-md-0 rounded'>
         <h4 className='mb-3 px-1'>Cart</h4> 
        <ul className='list-group mb-3'>
          {
            cartItems.map((item) => {
              return <CartItem item={item} key = {item.id}/>
            })
          }
        </ul> 
        <CartNumbers/>
        <CartBuyButton/>        
      </div>
    </div>
  </div>
  )
}

export default Cart