const express = require('express');
const router = express.Router();

const { getAllProducts, getProductById} = require('../controller/productController')

//get all products from db
//GET /api/products
//public
router.get('/', getAllProducts)


//get all products from db
//GET /api/product/:id
//public
router.get('/:id', getProductById)


module.exports = router;