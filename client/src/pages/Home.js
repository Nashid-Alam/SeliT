import React from "react"
import ProductCard from "../components/ProductCard"
import axios from "axios"

function Home() {
  const getAllProduct = async () => {
    const response = await axios.get("http://localhost:3001/api/products")
    console.log(response.data)
  }
  getAllProduct()

  const productName = "Bike"
  const productRating = 4
  const productImage =
    "https://image.shutterstock.com/image-photo/modern-black-bike-jpg-260nw-34468921.jpg"

  return (
    <div>
      <ProductCard
        name={productName}
        image={productImage}
        rating={productRating}
      />
    </div>
  )
}

export default Home
