import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
// import data from '../data'
import ProductButton from '../components/products/ProductButton'
import Line from '../components/extra/Line'
import Products from '../components/products/Products'
import { useSelector, useDispatch } from 'react-redux'
import { setSingleProduct } from '../features/product/productSlice'
import Price from '../components/extra/Price'

const Single = () => {
  const {single, singleSimilarProduct}  = useSelector((state) => state.products)
  const {id} = useParams()
  // console.log(typeof(id))
  // const product = data.find((product) => product.id === +id)
  const imgPath = '/images/' + single.id + '.jpg';
  const dispatch = useDispatch()
  useEffect(()=> {
  dispatch(setSingleProduct(id))    
  }, [id])
  return (
    <>
    <div className = "row justify-content-center align-items-center text-white mx-auto" id = "single">
       <div className='col-6'>
        <img src = {imgPath} alt = "" className='card-img-top mb-5 mb-md-0 p-0 p-lg-5'/>
        </div> 
       <div className='col-md-6 text-center text-md-start'>
            <h2 className='fs-1 fw-bold'>{single.name}</h2>
            <div className='fs-5 mb-2'><Price value = {single.price}/></div>
            <p className='lead'>{single.description.substring(0, 100)}</p>
            <ProductButton product = {single}/>
        </div> 
    </div>
     <Line/>
     <h2 className='text-white text-center my-4'>
            Similar Products Like This
      </h2>
      <Products products = {singleSimilarProduct.slice(0, 4)}/>
     </>

  )
}

export default Single