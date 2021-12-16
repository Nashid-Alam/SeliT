const Product = require("../models/product")

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

const getProductbyId = async (req, res) => {
  try {
		const id = req.params.id
    const products = await Product.findById(id)
    return res.status(200).json(products)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}


const deleteProductbyId = async (req, res) => {
  try {
		const id = req.params.id
    const deletedProduct = await Product.findByIdAndDelete(id)
    return res.status(200).json("Product Deleted")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateProductbyId = async (req, res) => {
  try {
		const id = req.params.id
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body)
    return res.status(200).json("Product updated")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createProduct,
  getAllProducts,
	getProductbyId,
	deleteProductbyId,
	updateProductbyId
}
