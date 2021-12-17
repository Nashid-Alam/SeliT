import React from 'react'
import ProductCard from '../components/ProductCard'

function Home() {
  const productName = "Bike"
  const productRating = 4
  const productImage= "https://image.shutterstock.com/image-photo/modern-black-bike-jpg-260nw-34468921.jpg"
  return (
    <div>
      <ProductCard/>
    </div>
  )
}

export default Home
