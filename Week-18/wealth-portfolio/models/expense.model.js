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
    type: mongoose.Types.Decimal128,
  },
  notes: {
    type: String,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
});

module.exports = mongoose.model("Expense", ExpenseSchema);
