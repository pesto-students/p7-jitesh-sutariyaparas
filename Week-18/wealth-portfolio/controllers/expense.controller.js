const Expense = require("../models/expense.model");

const getAllExpense = async (req, res) => {
  console.log("GET All Expense..");
  try {
    let startDate = req.query.start_date;
    let endDate = req.query.end_date;
    const pageNumber = parseInt(req.query.page_number) || 1;
    const pageSize = parseInt(req.query.page_size) || 10;
    const skip = (pageNumber - 1) * pageSize;
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const expense = await Expense.find(
        {
          date: {
            $gte: start,
            $lte: end,
          },
          user_id: req.params.user_id,
        },
        // { name: 1, date: 1 }
      ).skip(skip).limit(pageSize);
      console.log("expense___record Length",expense.length)
      res.json(expense);
    } else {
      const expense = await Expense.find({ user_id: req.params.user_id });
      res.json(expense);
    }
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
    console.log("Create Expense.....", req.body);
    const expenseValue = await Expense.create({
      ...req.body,
      user_id: req.params.user_id,
    });

    //await Expense.deleteMany();
    // Auto generate Date for test
    // for (let i = 1; i <= 12; i++) {
    //   await Expense.create({
    //     name: `Expense 2023-${i}-02`,
    //     type: "Miscellaneous",
    //     date: new Date(`2023-${i}-02`),
    //     amount: 100.00,
    //     notes: `This is expense number ${i}.`,
    //     user_id: req.params.user_id, // replace with actual user ID
    //   });
    // }

    res.json(expenseValue);
  } catch (err) {
    console.log(err);
  }
};

const updateExpense = async (req, res) => {
  console.log("Expense Update");
  try {
    const expense = await Expense.updateOne(
      { _id: req.params.id },
      { ...req.body }
    );
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
