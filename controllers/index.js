const Product = require('../models/product');

const createProduct = async (req, res) => {
    try {
        const product = await new Product(req.body)
        await product.save()
        return res.status(201).json({
            product,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}


const getAllProducts = async (req, res) => {
    try {
        const products= await Product.find()
        return res.status(200).json({ products })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    createProduct,
    getAllProducts
}
