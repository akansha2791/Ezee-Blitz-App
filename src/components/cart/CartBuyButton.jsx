import React from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearCartItems } from '../../features/cart/cartSlice'
const CartBuyButton = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleClick = async() => {
  let result = await Swal.fire({
    title: "Do you want to place the order",
    showDenyButton: true,
    confirmButtonText: "Place Order",
    denyButtonText: "Don't Place"  
    })   
      if (result.isConfirmed) {
        await Swal.fire({
          title: "Done",
          text: "Order placed successfully",
          icon: "success",
      });
      navigate("/")
      // window.location.reload();
      dispatch(clearCartItems())
      } else if (result.isDenied) {
        await Swal.fire(
          {
            title: "Order not placed",
            text: "",
            icon: "info",        
        })
      }    
  }
  return (
    <div>
       <button className='btn btn-success fw-bold d-block bt-3 w-100' onClick={handleClick}>
        Buy Now
      </button>
    </div>
  )
}

export default CartBuyButton