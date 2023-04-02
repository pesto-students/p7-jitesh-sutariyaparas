const Income = require("../models/income.model");

const getAllIncome = async (req, res) => {
  console.log("GET All Income");
  try {
    const pageNumber = parseInt(req.query.page_number) || 1;
    const pageSize = parseInt(req.query.page_size) || 10;
    const skip = (pageNumber - 1) * pageSize;
    const asset = await Income.find({ user_id: req.params.user_id }).skip(skip).limit(pageSize);
    res.json(asset);
  } catch (err) {
    console.log(err);
  }
};

const getIncomeById = async (req, res) => {
  console.log("GET Income BY ID", req.params.id);
  try {
    const asset = await Income.findById(req.params.id);
    res.json(asset);
  } catch (err) {
    console.log(err);
  }
};

const createIncome = async (req, res) => {
  try {
    console.log("Create Income", req.body);
    const assetValue = await Income.create({
      ...req.body,
      user_id: req.params.user_id,
    });
    res.json(assetValue);
  } catch (err) {
    console.log(err);
  }
};

const updateIncome = async (req, res) => {
  console.log("Income Update");
  try {
    const user = await Income.updateOne(
      { _id: req.params.id },
      { ...req.body }
    );
    res.json(user);
  } catch (err) {
    console.log(err);
  }
};

const deleteIncome = (req, res) => {
  console.log("Income delete");
  Income.deleteOne({ _id: req.params.id }).then((result) => {
    res.json(result);
  });
};

module.exports = {
  getAllIncome, //SELECT *
  getIncomeById, //SELECT
  createIncome, //INSERT
  updateIncome, //UPDATE
  deleteIncome, //DELETE
};
