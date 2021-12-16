const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Reviews = new Schema(
  {
    product_id = { type: Number, required: true },
    reviewer = { type: String, required: true },
    rating = {type: Number, required: true},
    comments = {type: String, required: true }
    },
    {timestamps:true},
)

module.exports = mongoose.model('reviews',Reviews)