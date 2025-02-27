import React from 'react'
import { useNavigate } from 'react-router-dom'
const NoContent = (props) => {
  const {btnText, text} = props
  const navigate = useNavigate()
  const handleHomeNavigation = () => {
    navigate("/")
  }
  return (
    <div className="text-white text-center my-5 mx-auto p-0 p-md-5 rounded">
    <h2>{text}</h2>
    <button       
        className="btn btn-success btn-lg mt-3" onClick={handleHomeNavigation}
    >
        {btnText}
    </button>
</div>
  )
}

export default NoContent