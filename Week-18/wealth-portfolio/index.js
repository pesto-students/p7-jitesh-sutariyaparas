var express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db.config.js");
const app = express();
require("dotenv").config();
const PORT = 3005;

// connecting to db
connectDB();

app.use(express.json());
app.use("/v1", require("./routes/user.route"));
app.use("/v1", require("./routes/asset.route"));
app.use("/v1", require("./routes/income.route"));
app.use("/v1", require("./routes/expense.route"));
app.use("/v1", require("./routes/saving.route"));
// app.use("/v1", require("./routes/equity.route"));
app.use("/v1", require("./routes/fixedIncome.route"));

app.use(function (req, res) {
  res.status(404).json("err: Page not found");
});

app.listen(PORT, () => {
  console.log("app is running on port " + PORT);
});
