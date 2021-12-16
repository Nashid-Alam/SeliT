const { Router } = require("express")
const router = Router()
const controllers = require("../controllers/index")

router.get("/", (req, res) => res.send("This is root!"))
router.get("/products", controllers.getAllProducts)
router.post("/products", controllers.createProduct)
router.get("/product/:id", controllers.getProductbyId)
router.put("/product/:id", controllers.updateProductbyId)
router.delete("/product/:id", controllers.deleteProductbyId)

module.exports = router
