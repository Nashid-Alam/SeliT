
import axios from "axios"
import React, { useEffect, useState } from "react"


function ReviewCard(props) {
  const id = props.reviewId

  const [reviews, setReviews] = useState({})

  useEffect(() => {
  const getReviews = async () => {
    const response = await axios.get(`http://localhost:3001/api/review/${id}`)
    console.log(response)
    setReviews(response.data)
  }
    getReviews()
  }, [id])

  return (
    <div>
     hello
    </div>
  )
}

export default ReviewCard
