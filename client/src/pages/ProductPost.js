import React, { useEffect, useState } from "react"
import axios from "axios"

function ProductPost(props) {
  const [productName, setProductName] = useState("")
  const [productPrice, setProductPrice] = useState("")
  const [productRating, setProductRating] = useState("")
  const [productDescription, setProductDescription] = useState("")
  const [productCategory, setProductCategory] = useState("")
  const [sellerName, setSellerName] = useState("")
  const [sellerEmail, setsellerEmail] = useState("")
  const [productPost, setProductPost] = useState("")

  const handleChange = (e) => {
    if (e.target.name === "productName") {
      setProductName(e.target.value)
    }
    if (e.target.name === "productPrice") {
      setProductPrice(e.target.value)
    }
    if (e.target.name === "productRating") {
      setProductRating(e.target.value)
    }
    if (e.target.name === "productDescription") {
      setProductDescription(e.target.value)
    }
    if (e.target.name === "productCategory") {
      setProductCategory(e.target.value)
    }
    if (e.target.name === "sellerName") {
      setSellerName(e.target.value)
    }
    if (e.target.name === "sellerEmail") {
      setsellerEmail(e.target.value)
    }
  }

  const handlePost = async (e) => {
    e.preventDefault()
    const response = await axios.post("http://localhost:3001/api/products", {
      name: productName,
      price: parseInt(productPrice),
      category: productCategory,
      description: productDescription,
      average_rating: parseInt(productRating),
      seller_name: sellerName,
      seller_email: sellerEmail,
    })
    console.log("successfully added product")
    props.history.push("/")
  }

  return (
    <div>
      <form>
        <input
          name="productName"
          type="text"
          placeholder="Enter a number"
          onChange={handleChange}
        />
        <input
          name="productPrice"
          type="text"
          placeholder="Enter a number"
          onChange={handleChange}
        />
        <input
          name="productRating"
          type="text"
          placeholder="Enter a number"
          onChange={handleChange}
        />
        <input
          name="productDescription"
          type="text"
          placeholder="Enter a number"
          onChange={handleChange}
        />
        <input
          name="category"
          type="text"
          placeholder="Enter a number"
          onChange={handleChange}
        />
        <input
          name="sellerName"
          type="text"
          placeholder="Enter a number"
          onChange={handleChange}
        />
        <input
          name="sellerEmail"
          type="text"
          placeholder="Enter a number"
          onChange={handleChange}
        />
        <button onClick={handlePost}>Submit</button>
      </form>
    </div>
  )
}

export default ProductPost
