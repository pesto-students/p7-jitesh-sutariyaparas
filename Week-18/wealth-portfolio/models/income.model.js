const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Income Collection
const IncomeSchema = new Schema({
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
});

module.exports = mongoose.model("Income", IncomeSchema);
