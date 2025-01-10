import React from 'react'
// import data from '../data'
import { useSelector } from 'react-redux'
import Products from '../components/products/Products'

const Home = () => {
  const {productFromSearch} = useSelector((state) => state.products)
  return (
    <div>
       <Products products = {productFromSearch}/>
    </div>
  )
}

export default Home