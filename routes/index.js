const { Router } = require("express")
const router = Router()
const controllers = require("../controllers")

router.get("/", (req, res) => res.send("This is root!"))
router.get("/products", controllers.getAllProducts)
router.post("/products", controllers.createProduct)
router.get("/product/:id", controllers.getProductById)
router.put("/product/:id", controllers.updateProductById)
router.delete("/product/:id", controllers.deleteProductById)

router.post("/reviews", controllers.createReview)
router.get("/reviews", controllers.getAllReviews)
router.get("/review/:id", controllers.getReviewById)
router.put("/review/:id", controllers.updateReviewById)
router.delete("/review/:id", controllers.deleteReviewById)

module.exports = router
