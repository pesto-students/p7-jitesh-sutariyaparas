const express = require("express");
const router = express.Router();

const fixedIncomeController = require("../controllers/fixedIncome.controller");

const authMiddleware = require("../middleware/auth");


// fixedIncome Routes
router.get("/api/fixed_incomes/user/:user_id", authMiddleware, fixedIncomeController.getAllFixedIncomes);  //select
router.get("/api/fixed_incomes/:id", authMiddleware, fixedIncomeController.getFixedIncomeById); //select
router.post("/api/fixed_incomes/:user_id", authMiddleware, fixedIncomeController.createFixedIncome); //insert
router.put("/api/fixed_incomes/:id", authMiddleware, fixedIncomeController.updateFixedIncome); //update
router.delete("/api/fixed_incomes/:id", authMiddleware, fixedIncomeController.deleteFixedIncome); //delete


module.exports = router;