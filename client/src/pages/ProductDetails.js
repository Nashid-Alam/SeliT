import axios from "axios"
import React, { useEffect, useState } from "react"
import ReviewCard from "../components/ReviewCard"
import EditProduct from "../components/EditProduct"
import ReviewPost from "../components/ReviewPost"

function ProductDetails(props) {
  const id = props.match.params.productId
  const [displayEditForm, setDisplayEditForm] = useState(false)
  const [displaySellerContact, setdisplaySellerContact] = useState(false)
  const [product, setProduct] = useState({})
  const [reviews, setReviews] = useState([])

  const getProduct = async () => {
    const response = await axios.get(`http://localhost:3001/api/product/${id}`)
    setProduct(response.data)
    setReviews(response.data.reviews)
  }

  const deleteProduct = async (e) => {
    e.preventDefault()
    const response = await axios.delete(
      `http://localhost:3001/api/product/${id}`
    )
    props.history.push("/")
  }

  const openUpdateForm = (e) => {
    setDisplayEditForm(true)
  }
  const openSellerContact = (e) => {
    setdisplaySellerContact(!displaySellerContact)
    
  }

  useEffect(() => {
    getProduct()
  }, [id])

  return (
    <div>
      {displayEditForm ? (
        <EditProduct
          product={product}
          getProduct={getProduct}
          setDisplayEditForm={setDisplayEditForm}
        />
      ) : (
        <>
          <div className="productDetailContainer">
            <img className="detailImage" src={product.image} alt="product" />
            <div>
              <h1>{product.name}</h1>
              <p>
                Price: <span className="price">${product.price}</span>
              </p>
              <div>Rating: {product.average_rating}</div>
              <h4>About this item</h4>
              <p>{product.description}</p>
              <button onClick={openSellerContact}>Buy Now</button>
              {displaySellerContact?(<p>contact : {product.seller_email}</p>):<p></p>}
              <div>
                <button onClick={openUpdateForm}>Update Product</button>
                <button onClick={deleteProduct}>Delete Product</button>
              </div>
            </div>
          </div>

          <ReviewPost productId={id} getProduct={getProduct} />

          <div>
            {reviews.map((review) => {
              return (
                <ReviewCard
                  key={review._id}
                  review={review}
                  getProduct={getProduct}
                />
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default ProductDetails
