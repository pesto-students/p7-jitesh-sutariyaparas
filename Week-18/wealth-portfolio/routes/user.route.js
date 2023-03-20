const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

const authMiddleware = require("../middleware/auth");

router.get("/api/users", authMiddleware, userController.getUsers);
router.post("/api/users", userController.createUser);
router.post("/api/user/login", userController.login);

module.exports = router;
