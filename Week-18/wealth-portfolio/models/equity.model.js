const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Equity Collection
const EquitySchema = new Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  purchase_date: {
    type: Date,
  },
  purchase_price: {
    type: NumberDecimal,
  },
  current_value: {
    type: NumberDecimal,
  },
  quantity: {
    type: Number,
  },
  notes: {
    type: String,
  },
  userId: String
});

module.exports = mongoose.model("Equity", EquitySchema);
