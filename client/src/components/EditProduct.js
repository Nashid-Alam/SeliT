import React from "react"
import axios from "axios"

function EditProduct(props) {
  const cancelEdit = (e) => {
    props.setDisplayEditForm(false)
  }

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
    <form className="addProductForm" onSubmit={updateProduct}>
      <div className="productInput">
      <label>Product Title: </label>
      <input name="name" placeholder={props.product.name} />
      </div>

      <div className="productInput">
      <label>Product image: </label>
      <input name="image" placeholder="enter image url" />
      </div>

      <div className="productInput">
      <label>Price: </label>
      <input name="price" placeholder={"$" + props.product.price} />
      </div>

      <div className="productInput">
      <label>Description: </label>
      <textarea className="textArea"
        name="description"
        placeholder={props.product.description}
      />
      </div>

      <button type="submit">Save Edits</button>
      <button onClick={cancelEdit}>Cancel</button>
    </form>
  )
}

export default EditProduct
