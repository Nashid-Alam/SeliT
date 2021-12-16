const db = require('../db')
const Product = require('../models/product')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const product = [
      {name:"bracelet",
      // images:[""],
      price:25,
      category:"jewelery",
      description:"this is the best thing",
      average_rating:5,
      seller_name:"nashid",
      seller_email:"nashid17"
    },
    {name:{type:String,required: true},
    // images:[""],
    price:{type:Number, required:true},
    category:{type:String,required: true},
    description:{type:String,required:true},
    average_rating:{type:Number, required:true},
    seller_name:{type:String, required:true},
    seller_email:{type:String, required:true}
    },
   
    ]

    await Product.insertMany(product)
    console.log("Created some product")
}
const run = async () => {
    await main()
    db.close()
}

run()