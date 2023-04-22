const express = require("express");
const router = express.Router();

const equityController = require("../controllers/equity.controller");

const authMiddleware = require("../middleware/auth");


// Equity Routes
router.get("/api/equity/user/:user_id", authMiddleware, equityController.getAllEquities);  //select
router.get("/api/equity/:id", authMiddleware, equityController.getEquityById); //select
router.post("/api/equity/:user_id", authMiddleware, equityController.createEquity); //insert
router.put("/api/equity/:id", authMiddleware, equityController.updateEquity); //update
router.delete("/api/equity/:id", authMiddleware, equityController.deleteEquity); //delete


module.exports = router;