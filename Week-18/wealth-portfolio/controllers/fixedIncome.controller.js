const FixedIncome = require("../models/fixedIncome.model");


const getAllFixedIncomes = async (req, res) => {
  console.log("GET All FixedIncome..");
  try {
    const fixedIncome = await FixedIncome.find({"user_id":req.params.user_id});
    res.json(fixedIncome);
  } catch (err) {
    console.log(err);
  }
};

const getFixedIncomeById = async (req, res) => {
  console.log("GET FixedIncome BY ID", req.params.id);
  try {
    const fixedIncome = await FixedIncome.findById(req.params.id);
    res.json(fixedIncome);
  } catch (err) {
    console.log(err);
  }
};

const createFixedIncome = async (req, res) => {
  try {
    console.log("Create FixedIncome", req.body);
    const fixedIncomeValue = await FixedIncome.create({
      ...req.body,
      user_id: req.params.user_id,
    });
    res.json(fixedIncomeValue);
  } catch (err) {
    console.log(err);
  }
};

const updateFixedIncome = async (req, res) => {
  console.log("FixedIncome Update");
  try {
    const user = await FixedIncome.updateOne({ _id: req.params.id }, { ...req.body });
    res.json(user);
  } catch (err) {
    console.log(err);
  }
};

const deleteFixedIncome = (req, res) => {
  console.log("FixedIncome delete");
  FixedIncome.deleteOne({ _id: req.params.id }).then((result) => {
    res.json(result);
  });
};

module.exports = {
  getAllFixedIncomes, //SELECT *
  getFixedIncomeById, //SELECT
  createFixedIncome, //INSERT
  updateFixedIncome, //UPDATE
  deleteFixedIncome, //DELETE
};