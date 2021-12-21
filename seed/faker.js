const faker = require("faker")

function fakeProduct() {
  const productName = faker.commerce.productName()
  const productPrice = faker.commerce.price()
  const productDescription = faker.commerce.productDescription()
  const productImage = faker.image.image()
  const seller_name = faker.name.firstName()
  const seller_email = faker.internet.email()

  const fakeObject = {
    name: productName,
    price: productPrice,
    description: productDescription,
    image: productImage,
    seller_name: seller_name,
    seller_email: seller_email,
    average_rating: Math.floor(Math.random() * 6),
  }
  return fakeObject
}

module.exports = fakeProduct
