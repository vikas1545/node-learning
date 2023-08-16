
const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.get("/", userController.getAllUsers)
.get("/:id", userController.getUser)
.post("/", userController.createUser)
.put("/:id", userController.updateUser)
.patch("/:id", userController.editUser)
.delete("/:id", userController.deleteUser);


exports.routes= router;