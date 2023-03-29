const { Router } = require("express")

const productRoutes = require("./productsRoutes")

const router = Router()

router.use("/products", productRoutes)

module.exports = router
