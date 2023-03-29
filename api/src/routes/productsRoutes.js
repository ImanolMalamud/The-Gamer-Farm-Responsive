const { Router } = require("express")
const productControllers = require("../controllers/productControllers")
const router = Router()

router.get("/", productControllers.getAllProducts)

// router.get("/:id", productControllers.getProductById)

router.post("/", productControllers.createProduct)

module.exports = router
