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
  const [image, setimage] = useState("")

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
    if (e.target.name === "image") {
      setimage(e.target.value)
    }
    if (e.target.name === "rating") {
      setProductRating(e.target.value)
    }
  }

  const handlePost = async (e) => {
    e.preventDefault()
    const response = await axios.post("http://localhost:3001/api/products", {
      name: productName,
      image:image,
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
      <form className="addProductForm">

        <div className="productInput">
        <label>Product Name: </label>
        <input
          name="productName"
          type="text"
          placeholder="Enter a product"
          onChange={handleChange}
        />
        </div>

        <div className="productInput">
        <label>Product Price: </label>
        <input
          name="productPrice"
          type="text"
          placeholder="Enter a price"
          onChange={handleChange}
        />
        </div>

        <div className="productInput">
        <label>Product Rating: </label>
        <input
          name="Rating"
          type="text"
          placeholder="Enter a rating"
          onChange={handleChange}
        />
        </div>

        <div className="productInput">
        <label>Product Description: </label>
        <textarea className="textArea"
          name="productDescription"
          type="text"
          placeholder="Enter a decription"
          onChange={handleChange}
        />
        </div>

        <div className="productInput">
        <label>category: </label>
        <input
          name="category"
          type="text"
          placeholder="Enter a category"
          onChange={handleChange}
        />
        </div>

        <div className="productInput">
        <label>Seller Name: </label>
        <input
          name="sellerName"
          type="text"
          placeholder="Enter a name"
          onChange={handleChange}
        />
        </div>
        <div className="productInput">
        <label>Seller Email: </label>
        <input
          name="sellerEmail"
          type="text"
          placeholder="Enter a email"
          onChange={handleChange}
        />
        </div>

        <div className="productInput">
        <label>Image: </label>
        <input
          name="image"
          type="text"
          placeholder="Enter a url"
          onChange={handleChange}
        />
        </div>
        <button onClick={handlePost}>Submit</button>
      </form>
    </div>
  )
}

export default ProductPost
