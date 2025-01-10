import React from 'react'

const Price = (props) => {
    let {value, decimal = 0} = props
  return (
    <>
    ₹{Number(value).toFixed(decimal)}
    </>
  )
}

export default Price