import React from 'react'

function ProductCard(props) {


  return (
    <div className="productComponent" onClick={props.onClick}>
      <img className="productImage" src={props.product.image} alt ="product"/>
      <h3 className="productName">{props.product.name}</h3>
      <h1 className="productPrice">{props.product.price}</h1>
      
    </div>
  )
}

export default ProductCard
