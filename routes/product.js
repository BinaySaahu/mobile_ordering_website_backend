const express = require("express");
const auth = require("../middleware/validator")

const router = express.Router();
const getProducts = require("../contollers/product")

// router.use(auth);

router.get("/getAllProducts",getProducts.getProducts)
router.get("/:category",getProducts.category)
router.get("/productDetails/:productName",getProducts.getAProduct)

module.exports = router;