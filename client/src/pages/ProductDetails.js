import axios from "axios"
import React, { useEffect, useState } from "react"
import ReviewCard from "../components/ReviewCard"

function ProductDetails(props) {
  console.log(props)
  const id = props.match.params.productId

  const [product, setProduct] = useState({})
  const [reviews, setReviews] = useState([])

  const getProduct = async () => {
    const response = await axios.get(`http://localhost:3001/api/product/${id}`)
    setProduct(response.data)
  }

  const getReviews = async () => {
    const response = await axios.get('http://localhost:3001/api/reviews')
    console.log(response.data)
    setReviews(response.data)
  }

  const deleteProduct = async (e) => {
    e.preventDefault()
    const response = await axios.delete(
      `http://localhost:3001/api/product/${id}`
    )
    props.history.push("/")
  }

  const editProduct = async (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const image = e.target.image.value
    const price = e.target.price.value
    const description = e.target.description.value
    const body = {}

    if (name !== "") {
      body.name = name
    }
    if (image !== "") {
      body.image = image
    }
    if (price !== "") {
      body.price = price
    }
    if (description !== "") {
      body.description = description
    }
    const response = await axios.put(
      `http://localhost:3001/api/product/${id}`,
      body
    )
    getProduct()
  }



  const openUpdateForm = (e) => {
    console.log("opens form")
  }
  
  const addReview= async (e) => {
    e.preventDefault()
    const reviewer = e.target.name.value
    console.log (reviewer)
    const rating = e.target.rating.value
    console.log (rating)
    const comment = e.target.comment.value
    const reviewBody = {}

    if (reviewer !== "") {
      reviewBody.reviewer = reviewer
    }
    if (rating !== "") {
      reviewBody.rating=rating 
    }
    if (comment !== "") {
      reviewBody.comment = comment
    }
    const response = await axios.post(
      "http://localhost:3001/api/reviews",
      reviewBody
    )
    getReviews()
  }


  useEffect(() => {
    getProduct()
    getReviews()
  }, [id])

  return (
    <div>
      <div>
        <img src={product.image} alt="product" />
        <h1>{product.name}</h1>
        <p>Rating: {product.rating}</p>
        <p>Price: ${product.price}</p>
        <h4>About this item</h4>
        <p>{product.description}</p>
        <button onClick={deleteProduct}>Delete this product</button>
        <button onClick={openUpdateForm}>Update this product</button>
      </div>

      <form onSubmit={editProduct}>
        <label>Product Title: </label>
        <input type="text" name="name" placeholder={product.name} />
        <label>Product image: </label>
        <input type="text" name="image" placeholder="enter image url" />
        <label>Price: </label>
        <input type="text" name="price" placeholder={"$" + product.price} />
        <label>Description: </label>
        <input
          type="text"
          name="description"
          placeholder={product.description}
        />
        <button type="submit">Save</button>
      </form>
      
      <div>
        <form onSubmit={addReview}>
          <label>Reviewer Name</label>
          <input type="text" name="name" placeholder="name"/>
          <label>Rating</label>
          <input type="number" name="rating" placeholder="rating"/>
          <label>Comment</label>
          <input type="text" name="comment" placeholder="comment"/>
          <button>Submit</button>
        </form>
      </div>
      
      <div>
        {reviews.map((review) => {
          return <ReviewCard key={review._id} review={review} />
        })}
      </div>
    </div>
  )
}

export default ProductDetails
