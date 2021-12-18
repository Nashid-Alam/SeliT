import React, { useState } from 'react'

function ProductPost() {
  const [productName, setProductName]=useState("")
  const [productPrice, setProductPrice]=useState("")
  const [productRating, setProductRating]=useState("")
  const [productDescription, setProductDescription]=useState("")
  const [productCategory, setProductCategory]=useState("")
  const [sellerName, setSellerName]=useState("")
  const [sellerEmail,setsellerEmail]=useState("")
  return (
    <div>
      <form>
        <input 
          name="productName"
          type= "text"
          placeholder="Enter a number"
          // onChange={HandleChange}
          />
          <input 
          name="productPrice"
          type= "text"
          placeholder="Enter a number"
          // onChange={HandleChange}
          />
          <input 
          name="productRating"
          type= "text"
          placeholder="Enter a number"
          // onChange={HandleChange}
          />
          <input 
          name="productDescription"
          type= "text"
          placeholder="Enter a number"
          // onChange={HandleChange}
          />
          <input 
          name="category"
          type= "text"
          placeholder="Enter a number"
          // onChange={HandleChange}
          />
          <input 
          name="sellerName"
          type= "text"
          placeholder="Enter a number"
          // onChange={HandleChange}
          />
          <input 
          name="sellerEmail"
          type= "text"
          placeholder="Enter a number"
          // onChange={HandleChange}
          />

          
          
      </form>
    </div>
  )
}

export default ProductPost
