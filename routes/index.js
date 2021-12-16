const { Router } = require('express');
const router = Router();
const controllers = require("../controllers/index")

router.get('/', (req, res) => res.send('This is root!'))
router.get('/products', controllers.getAllProducts)
router.post('/products', controllers.createProduct)
module.exports = router;