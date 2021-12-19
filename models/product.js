const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Product = new Schema(
  {
    name: { type: String, required: true },
    // images:[""],
    price: { type: Number, required: true },
    category: { type: String, required: false },
    description: { type: String, required: false },
    average_rating: { type: Number, required: false },
    seller_name: { type: String, required: false },
    seller_email: { type: String, required: false},
  },
  { timestamps: true }
)

module.exports = mongoose.model("products", Product)
