const express = require("express");
const router = express.Router();

const expenseController = require("../controllers/expense.controller");

const authMiddleware = require("../middleware/auth");


// Income Routes
router.get("/api/expense/user/:user_id", authMiddleware, expenseController.getAllExpense);  //select
router.get("/api/expense/:id", authMiddleware, expenseController.getExpenseById); //select
router.post("/api/expense/:user_id", authMiddleware, expenseController.createExpense); //insert
router.put("/api/expense/:id", authMiddleware, expenseController.updateExpense); //update
router.delete("/api/expense/:id", authMiddleware, expenseController.deleteExpense); //delete


module.exports = router;