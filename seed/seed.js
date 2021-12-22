const db = require("../db")
const Product = require("../models/product")
const fakeProduct = require("./faker")

// Connect to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
  const products = []

  for (let i = 0; i < 20; i++ ) {
    products.push(fakeProduct())
  }

  await Product.insertMany(products)

  console.log("Created some product")
}
const run = async () => {
  await main()
  db.close()
}

run()
