const mongoose = require("mongoose");
// const Users = require("../models/user.model");

const Schema = mongoose.Schema;

// Assets Collection
const AssetSchema = new Schema({
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
    type: mongoose.Types.Decimal128,
  },
  current_value: {
    type: mongoose.Types.Decimal128,
  },
  quantity: {
    type: Number,
  },
  notes: {
    type: String,
  },
  user_id: String,
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
});

module.exports = mongoose.model("Asset", AssetSchema);
