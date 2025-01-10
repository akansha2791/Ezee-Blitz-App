import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedCategory } from '../../features/product/productSlice'

const CategorySelector = () => {
  // const categories = ['All', 'Gloves', 'Jackets', 'Hats', 'Scarfs', 'Socks']
  const {categories, selectedCategory} = useSelector((state) => state.products)
  // const title = "All"
  // const title = categories[0] 
  const title = selectedCategory 
  const dispatch = useDispatch()
  const handleMouseEnter = (e) => {
    dispatch(setSelectedCategory(e.target.innerText))
  }
  return (
    <div className='dropdown mb-3 mb-lg-0'>
    <button type="button" className='btn btn-outline-success dropdown-toggle' id="dropdownbtn1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {title} <i className="bi bi-caret-down-fill"></i>
    </button>
    <ul className='dropdown-menu'>
        {categories.map((category) => (
            <li key={category} onMouseEnter={handleMouseEnter}>
                <a href="#" className='dropdown-item'>{category}</a>
            </li>
        ))}
    </ul>
</div>

  )
}

export default CategorySelector