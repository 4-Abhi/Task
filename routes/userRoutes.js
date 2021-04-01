const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router
  .route("/")
  .post(userController.CreateUser)
  .get(userController.GetAllUser);

router
  .route("/:id")
  .get(userController.GetUser)
  .patch(userController.UpdateUser)
  .delete(userController.DeleteUser);

module.exports = router;
