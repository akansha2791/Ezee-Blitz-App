import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductButton from './ProductButton'
import Price from '../extra/Price'

const Product = (props) => {
  const {product} = props
  const navigate = useNavigate()
   const handleClick = () => {
    //  navigate(`/single/${product.id}`)
    navigate(`/single/${product.id}`)

   }
   const imgPath = "/images/" + product.id + ".jpg"
  return (
    <div className='col'>
    <div className='card h-100' id="product">
      <img onClick={handleClick} src = {imgPath} title = {product.name} alt="" className='card-img-top cursor-pointer'/>
      <div className='card-body p-4'>
        <div className='text-center'>
        <h5 className='fw-bolder'>{product.name}</h5>
        <span><Price value = {product.price}/></span>
        </div>
      </div>
      <div className='card-footer p-4 border-top-0 bg-transparent '>
        <ProductButton product = {product}/>
      </div>
    </div>
  </div>
  )
}

export default Product