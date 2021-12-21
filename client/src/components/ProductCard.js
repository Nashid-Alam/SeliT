import React from "react"

function ProductCard(props) {
  return (
    <div className="productCard" onClick={props.onClick}>
      <img
        className="cardImage"
        src={props.product.image}
        alt="product"
      />
      <div>
        <h4>{props.product.name}</h4>
        <p className="price">${props.product.price}</p>
        <div>Rating: {props.product.average_rating}</div>
      </div>
    </div>
  )
}

export default ProductCard
