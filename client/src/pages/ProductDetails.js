import axios from "axios"
import React, { useEffect, useState } from "react"
import ReviewCard from "../components/ReviewCard"

function ProductDetails(props) {
  console.log(props)
  const id = props.match.params.productId

  const [product, setProduct] = useState({})
  
  const getProduct = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/product/${id}`
    )
    console.log(response.data._id)
    setProduct(response.data)
  }
  useEffect(() => {
    console.log("use effect ran")
    getProduct()
  }, [id])

  const deleteProduct = async (e) => {
    e.preventDefault()
    const response = await axios.delete(
      `http://localhost:3001/api/product/${id}`
    )
    props.history.push("/")
  }

  const openUpdateForm = (e) => {
    console.log("opens form")
  
  }
  const editProduct = async (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const image = e.target.image.value
    const price = e.target.price.value
    const description = e.target.description.value

    const body = {}

    if (name !== "") {
      body.name = name
    }
    if (image !== "") {
      body.image = image
    }
    if (price !== "") {
      body.price = price
    }
    if (description !== "") {
      body.description = description
    }
    console.log(body)
    const response = await axios.put(`http://localhost:3001/api/product/${id}`,body)
    console.log(response)
    getProduct()
    console.log("successfully added product")
    
  }

  return (
    <div>
      <div>
        <img src={product.image} alt="product" />
        <h1>{product.name}</h1>
        <p>Rating: {product.rating}</p>
        <p>Price: ${product.price}</p>
        <h4>About this item</h4>
        <p>{product.description}</p>
        <button onClick={deleteProduct}>Delete this product</button>
        <button onClick={openUpdateForm}>Update this product</button>
      </div>

      <form onSubmit={editProduct}>
        <label>Product Title: </label>
        <input type="text" name="name" placeholder={product.name}/>
        <label>Product image: </label>
        <input type="text" name="image" placeholder="enter image url"/>
        <label>Price: </label>
        <input type="text" name="price" placeholder={"$" + product.price}/>
        <label>Description: </label>
        <input type="text" name="description" placeholder={product.description}/>
        <button type="submit">Save</button>
      </form>

      <div>
        this is where a list of reviews will be displayed with the ReviewCard
      </div>
    </div>
  )
}

export default ProductDetails
