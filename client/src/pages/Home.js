import React, { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import axios from "axios"

function Home(props) {
  const [products, setProducts] = useState([])

  const getAllProducts = async () => {
    const response = await axios.get("http://localhost:3001/api/products")
    setProducts(response.data)
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <div className="productListing">
      {products.map((product) => {
        return <ProductCard onClick={()=>
          props.history.push(`/productdetails/${product._id}`)
        }key={product._id} product={product} />
      })}
    </div>
  )
}

export default Home
