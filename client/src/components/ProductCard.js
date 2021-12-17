import React from 'react'

function ProductCard(props) {


  return (
    <div className="product" onClick={props.onClick}>
      <img src={props.image} alt ="product"/>
      <h3>{props.product.name}</h3>
      <h1>{props.product.price}</h1>
      
    </div>
  )
}

export default ProductCard
