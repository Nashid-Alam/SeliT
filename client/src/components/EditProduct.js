import React from "react"
import axios from "axios"

function EditProduct(props) {
  const updateProduct = async (e) => {
    e.preventDefault()
    const id = props.product._id
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
    const response = await axios.put(
      `http://localhost:3001/api/product/${id}`,
      body
    )
    props.getProduct()
    props.setDisplayEditForm(false)
  }

  return (
    <form onSubmit={updateProduct}>
      <label>Product Title: </label>
      <input name="name" placeholder={props.product.name} />
      <label>Product image: </label>
      <input name="image" placeholder="enter image url" />
      <label>Price: </label>
      <input name="price" placeholder={"$" + props.product.price} />
      <label>Description: </label>
      <textarea
        name="description"
        placeholder={props.product.description}
      />
      <button type="submit">Save Edits</button>
    </form>
  )
}

export default EditProduct
