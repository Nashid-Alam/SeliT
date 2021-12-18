import React, { useEffect, useState } from "react"
import axios from "axios"

function ReviewCard(props) {
  // const id = props.Id

  // const [reviews, setReviews] = useState({})

  // useEffect(() => {
  //   const getReviews = async () => {
  //     const response = await axios.get(`http://localhost:3001/api/review/${id}`)
  //     console.log(response)
  //     setReviews(response.data)
  //   }
  //   getReviews()
  // }, [id])

  return (
    <div>
      This is a review
    </div>
  )
}

export default ReviewCard
