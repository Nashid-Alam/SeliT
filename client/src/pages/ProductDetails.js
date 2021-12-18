import axios from "axios"
import React, { useEffect, useState } from "react"
import ReviewCard from "../components/ReviewCard"

function ProductDetails(props) {
  console.log(props)
  const id = props.match.params.productId

  const [product, setProduct] = useState({})

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/product/${id}`
      )
      console.log(response.data._id)
      setProduct(response.data)
    }
    getProduct()
  }, [id])

  const deletePost = async (e) => {
    e.preventDefault()
    const response = await axios.delete(`http://localhost:3001/api/product/${id}`)
    props.history.push('/')
  }
  return (
    <div>
      <div>
        <h1>{product.name}</h1>
        <img src={product.image} alt="product" />
        <p>{product.description}</p>
      </div>
      <button onClick={deletePost}>Delete this product</button>
      <div>
        <ReviewCard productId={product._id} />
      </div>
    </div>
  )
}

export default ProductDetails
