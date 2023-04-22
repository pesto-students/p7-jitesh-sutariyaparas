const express = require("express");
const router = express.Router();

const incomeController = require("../controllers/income.controller");

const authMiddleware = require("../middleware/auth");


// Income Routes
router.get("/api/income/user/:user_id", authMiddleware, incomeController.getAllIncome);  //select
router.get("/api/income/:id", authMiddleware, incomeController.getIncomeById); //select
router.post("/api/income/:user_id", authMiddleware, incomeController.createIncome); //insert
router.put("/api/income/:id", authMiddleware, incomeController.updateIncome); //update
router.delete("/api/income/:id", authMiddleware, incomeController.deleteIncome); //delete


module.exports = router;