import React from 'react'
import SearchBar from './SearchBar'
import CategorySelector from './CategorySelector'
import CartButton from './CartButton'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Navbar = ({title}) => {
  const location  = useLocation()
  // console.log(location)
  const {pathname} = location
  const navigate = useNavigate()
  const handleHomeNavigation = () => {
    navigate("/")
  }
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom fixed-top">
       <div className="container-fluid">
        <span className="navbar-brand fw-bold mx-lg-3 cursor-pointer" onClick={handleHomeNavigation}>
          {title}
        </span> 
        <button type="button" className="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle= "collapse" >
         <span className='navbar-toggler-icon'></span>
        </button> 
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

         {pathname === "/"  && <>
          <CategorySelector/>
          <SearchBar/>
          </>
          }          
         <CartButton/>                  
          </div>
       </div>
    </nav>   
  </div>
  )
}

export default Navbar