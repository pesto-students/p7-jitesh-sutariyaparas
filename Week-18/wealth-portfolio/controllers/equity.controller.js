const Equity = require("../models/equity.model");


const getAllEquities = async (req, res) => {
  console.log("GET All Equity..");
  try {
    const equity = await Equity.find({"user_id":req.params.user_id});
    res.json(equity);
  } catch (err) {
    console.log(err);
  }
};

const getEquityById = async (req, res) => {
  console.log("GET Equity BY ID", req.params.id);
  try {
    const equity = await Equity.findById(req.params.id);
    res.json(equity);
  } catch (err) {
    console.log(err);
  }
};

const createEquity = async (req, res) => {
  try {
    console.log("Create Equity", req.body);
    const equityValue = await Equity.create({
      ...req.body,
      user_id: req.params.user_id,
    });
    res.json(equityValue);
  } catch (err) {
    console.log(err);
  }
};

const updateEquity = async (req, res) => {
  console.log("Equity Update");
  try {
    const user = await Equity.updateOne({ _id: req.params.id }, { ...req.body });
    res.json(user);
  } catch (err) {
    console.log(err);
  }
};

const deleteEquity = (req, res) => {
  console.log("Equity delete");
  Equity.deleteOne({ _id: req.params.id }).then((result) => {
    res.json(result);
  });
};

module.exports = {
  getAllEquities, //SELECT *
  getEquityById, //SELECT
  createEquity, //INSERT
  updateEquity, //UPDATE
  deleteEquity, //DELETE
};