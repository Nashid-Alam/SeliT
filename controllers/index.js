const Product = require("../models/product")
const Review = require("../models/review")

const createProduct = async (req, res) => {
  try {
    const product = await new Product(req.body)
    await product.save()
    return res.status(201).json(product)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    return res.status(200).json(products)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getProductById = async (req, res) => {
  try {
    const id = req.params.id
    const products = await Product.findById(id).populate('reviews')
    return res.status(200).json(products)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteProductById = async (req, res) => {
  try {
    const id = req.params.id
    const deletedProduct = await Product.findByIdAndDelete(id)
    return res.status(200).json("Product Deleted")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateProductById = async (req, res) => {
  try {
    const id = req.params.id
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body)
    return res.status(200).json("Product Updated")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createReview = async (req, res) => {
  try {
    const productId = req.body.product_id
    const review = await new Review(req.body)
    await review.save()
    
    const product = await Product.findById(productId)
    const originalAvgRating = product.average_rating
    product.average_rating = (originalAvgRating * product.reviews.length + review.rating) / (product.reviews.length+1)
    product.reviews.push(review._id)
    await Product.findByIdAndUpdate(productId, product)

    return res.status(201).json(review)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
    return res.status(200).json(reviews)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getReviewById = async (req, res) => {
  try {
    const id = req.params.id
    const review = await Review.findById(id)
    return res.status(200).json(review)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteReviewById = async (req, res) => {
  try {
    const reviewId = req.params.id
    const deletedReview = await Review.findByIdAndDelete(reviewId)
    const productId = deletedReview.product_id

    const product = await Product.findById(productId)
    const reviews = product.reviews
    const index = reviews.indexOf(reviewId)
    product.reviews.splice(index, 1)

    // const originalAvgRating = product.average_rating
    // product.average_rating = (originalAvgRating * product.reviews.length + review.rating) / (product.reviews.length+1)
    // product.reviews.push(review._id)
    await Product.findByIdAndUpdate(productId, product)

    return res.status(200).json("Review Deleted")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateReviewById = async (req, res) => {
  try {
    const id = req.params.id
    const updatedReview = await Review.findByIdAndUpdate(id, req.body)
    return res.status(200).json("Review Updated")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProductById,
  updateProductById,
  createReview,
  getAllReviews,
  getReviewById,
  deleteReviewById,
  updateReviewById,
}
