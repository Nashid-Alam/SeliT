import axios from "axios"
import React, { useEffect, useState } from "react"
import ReviewCard from "../components/ReviewCard"
import EditProduct from "../components/EditProduct"

function ProductDetails(props) {
  const id = props.match.params.productId
  const [displayEditForm, setDisplayEditForm] = useState(false)

  const [product, setProduct] = useState({})
  const [reviews, setReviews] = useState([])

  const getProduct = async () => {
    const response = await axios.get(`http://localhost:3001/api/product/${id}`)
    setProduct(response.data)
  }

  const getReviews = async () => {
    const response = await axios.get("http://localhost:3001/api/reviews")
    setReviews(response.data)
  }

  const deleteProduct = async (e) => {
    e.preventDefault()
    const response = await axios.delete(
      `http://localhost:3001/api/product/${id}`
    )
    props.history.push("/")
  }

  const openUpdateForm = (e) => {
    setDisplayEditForm(true)
  }

  const addReview = async (e) => {
    e.preventDefault()
    const reviewer = e.target.name.value
    const rating = e.target.rating.value
    const comment = e.target.comment.value
    const reviewBody = {}

    if (reviewer !== "") {
      reviewBody.reviewer = reviewer
    }
    if (rating !== "") {
      reviewBody.rating = rating
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
      {displayEditForm ? (
        <EditProduct
          product={product}
          getProduct={getProduct}
          setDisplayEditForm={setDisplayEditForm}
        />
      ) : (
        <>
          <div className="productDetailContainer">
            <img className="detailImage" src={product.image} alt="product" />
            <div>
              <h1>{product.name}</h1>
              <p>Price: <span className="price">${product.price}</span></p>
              <div>Rating: {product.average_rating}</div>
              <h4>About this item</h4>
              <p>{product.description}</p>
              <button>Buy Now</button>
              <div>
                <button onClick={openUpdateForm}>Update Product</button>
                <button onClick={deleteProduct}>Delete Product</button>
              </div>
            </div>
          </div>

          <form onSubmit={addReview}>
            <label>Reviewer Name</label>
            <input type="text" name="name" placeholder="name" />
            <label>Rating</label>
            <input type="number" name="rating" placeholder="rating" />
            <label>Comment</label>
            <input type="text" name="comment" placeholder="comment" />
            <button>Submit</button>
          </form>

          <div>
            {reviews.map((review) => {
              return <ReviewCard key={review._id} review={review} />
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default ProductDetails
