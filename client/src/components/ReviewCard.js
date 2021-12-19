import React from "react"


function ReviewCard(props) {

  return (
    <div>
      <h4>{props.review.reviewer}</h4>
      <p>rating: {props.review.rating}</p>
      <p>{props.review.comment}</p>
    </div>
  )
}

export default ReviewCard
