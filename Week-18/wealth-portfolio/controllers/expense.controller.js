const Expense = require("../models/expense.model");


const getAllExpense = async (req, res) => {
  console.log("GET All Expense..");
  try {
    const expense = await Expense.find({"user_id":req.params.user_id});
    res.json(expense);
  } catch (err) {
    console.log(err);
  }
};

const getExpenseById = async (req, res) => {
  console.log("GET Expense BY ID", req.params.id);
  try {
    const expense = await Expense.findById(req.params.id);
    res.json(expense);
  } catch (err) {
    console.log(err);
  }
};

const createExpense = async (req, res) => {
  try {
    console.log("Create Expense", req.body);
    const expenseValue = await Expense.create({
      ...req.body,
      user_id: req.params.user_id,
    });
    res.json(expenseValue);
  } catch (err) {
    console.log(err);
  }
};

const updateExpense = async (req, res) => {
  console.log("Expense Update");
  try {
    const expense = await Expense.updateOne({ _id: req.params.id }, { ...req.body });
    res.json(expense);
  } catch (err) {
    console.log(err);
  }
};

const deleteExpense = (req, res) => {
  console.log("Expense delete");
  Expense.deleteOne({ _id: req.params.id }).then((result) => {
    res.json(result);
  });
};

module.exports = {
  getAllExpense, //SELECT *
  getExpenseById, //SELECT
  createExpense, //INSERT
  updateExpense, //UPDATE
  deleteExpense, //DELETE
};