/**
 * File: src/routes/product.routes.js
 * Description: file responsible for the api routes related to the 'Product' class.
 */

const router = require("express-promise-router")();
const productController = require("../controllers/product.controller");

// ==> Defining CRUD routes - 'Product':

// ==> Route responsible for creating a new 'Product': (POST): localhost:3000/api/products
router.post("/products", productController.createProduct);

// ==> Route responsible for listing all the 'Products': (GET): localhost:3000/api/products
router.get("/products", productController.listAllProducts);

module.exports = router;
