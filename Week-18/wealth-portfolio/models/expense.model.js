const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Expense Collection
const ExpenseSchema = new Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  date: {
    type: Date,
  },
  amount: {
    type: NumberDecimal,
  },
  notes: {
    type: String,
  },
  userId: String
});

module.exports = mongoose.model("Expense", ExpenseSchema);
