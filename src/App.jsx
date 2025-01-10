import React, {useEffect} from 'react'
import Navbar from './components/nav/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Single from './pages/Single'
import { setCartNumbers } from './features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
const App = () => {
const {cartItems} = useSelector((state) => state.cart)
const dispatch = useDispatch();
useEffect(() => {
    dispatch(setCartNumbers())
  }, [cartItems])
  return (
    <div className="wrapper bg-dark text-white">
			<Navbar title="Ezee-Cart-Blitz" />
			<div className="container mt-5 py-5 px-3 px-md-5">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/single/:id" element={<Single />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</div>
		</div>
     
  )
}

export default App