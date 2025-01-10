import React from 'react'
import Product from './Product'
const Products = (props) => {
  const {products} = props
  // console.log(products)
  return (
    <div className='px-lg-5 text-dark'>
    <div className='row row-cols-l row-cols-sm-2 row-cols-lg-4 gy-4  justify-content-start'>
    {products.map((product)=>{
      return <Product key={product.id} product={product}/>
    })}
  </div>
  </div>   
  )
}

export default Products