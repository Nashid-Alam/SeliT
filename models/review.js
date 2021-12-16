const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Review = new Schema(
  {
    product_id: { type: String, required: true },
    reviewer: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: false },
  },
  { timestamps: true }
)

module.exports = mongoose.model("reviews", Review)
