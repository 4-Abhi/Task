const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router
  .route("/")
  .post(productController.CreateProduct)
  .get(productController.GetAllProduct);

router
  .route("/:id")
  .get(productController.GetProduct)
  .patch(productController.UpdatProduct)
  .delete(productController.DeleteProduct);

module.exports = router;
