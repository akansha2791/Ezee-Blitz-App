import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSearchTerm } from '../../features/product/productSlice'

const SearchBar = (e) => {
  const {searchTerm} = useSelector((state) => state.products)
  // const [text, setText] = useState('')
  const dispatch = useDispatch()
  const handleSubmit = () => {
    e.preventDefault()
  }
  const handleChange = (e) => {
     dispatch(setSearchTerm(e.target.value))
  }

  return (
    <div className='ms-lg-3 ms-md-0 me-3 mb-md-3 mb-lg-0 '>
      <form onSubmit= {handleSubmit}>
        <input type="search" className='form-control' placeholder="Search product" onChange = {handleChange} value = {searchTerm}/>
      </form>
    </div>
  )
}

export default SearchBar