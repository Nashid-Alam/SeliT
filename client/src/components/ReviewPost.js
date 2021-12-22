import React from "react"
import axios from "axios"

function ReviewPost(props) {

  const addReview = async (e) => {
    e.preventDefault()
    const reviewer = e.target.name.value
    const rating = e.target.rating.value
    const comment = e.target.comment.value
    const reviewBody = {
      product_id: props.productId
    }

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
    props.getProduct()
  }

  return (
    <form onSubmit={addReview}>
      <label>Reviewer Name</label>
      <input type="text" name="name" placeholder="name" />
      <label>Rating</label>
      <input type="number" name="rating" placeholder="rating" />
      <label>Comment</label>
      <input type="text" name="comment" placeholder="comment" />
      <button>Submit</button>
    </form>
  )
}

export default ReviewPost
