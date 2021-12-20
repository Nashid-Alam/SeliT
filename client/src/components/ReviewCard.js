import React from "react"
import axios from "axios"


function ReviewCard(props) {
  console.log(props.review)
  const deleteReview = async (e) => {
    e.preventDefault()
    const response = await axios.delete(
      `http://localhost:3001/api/review/${props.review._id}`
    )
    
  }
  
  return (
    <div>
      <h4>{props.review.reviewer}</h4>
      <p>rating: {props.review.rating}</p>
      <p>{props.review.comment}</p>
      <button onClick={deleteReview}>Delete</button>
    </div>
  )
}

export default ReviewCard
