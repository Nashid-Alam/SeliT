const faker = require("faker")

function fakeProduct() {

  const fakeObject = {
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    image: faker.image.image(),
    seller_name: faker.name.firstName(),
    seller_email: faker.internet.email(),
  }
  return fakeObject
}

module.exports = fakeProduct
