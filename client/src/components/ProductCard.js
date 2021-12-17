import React from 'react'

function ProductCard(props) {
  return (
    <div>
      <img src={props.image} alt ="product"/>
      <h3>{props.name}</h3>
      <h1>{props.rating}</h1>
      
    </div>
  )
}

export default ProductCard
