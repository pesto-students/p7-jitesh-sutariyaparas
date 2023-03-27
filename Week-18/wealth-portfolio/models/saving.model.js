const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Saving Collection
const SavingSchema = new Schema({
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

module.exports = mongoose.model("Saving", SavingSchema);