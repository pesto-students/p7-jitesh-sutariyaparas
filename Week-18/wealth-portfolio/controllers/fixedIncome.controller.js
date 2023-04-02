const FixedIncome = require("../models/fixedIncome.model");

const getAllFixedIncomes = async (req, res) => {
  console.log("GET All FixedIncome..");
  try {
    const pageNumber = parseInt(req.query.page_number) || 1;
    const pageSize = parseInt(req.query.page_size) || 10;
    const skip = (pageNumber - 1) * pageSize;

    let startDate = req.query.start_date;
    let endDate = req.query.end_date;
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const fixedIncome = await FixedIncome.find({
        purchase_date: {
          $gte: start,
          $lte: end,
        },
        user_id: req.params.user_id,
      })
        .skip(skip)
        .limit(pageSize);
      res.json(fixedIncome);
    } else {
      const fixedIncome = await FixedIncome.find({
        user_id: req.params.user_id,
      })
        .skip(skip)
        .limit(pageSize);
      res.json(fixedIncome);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const getFixedIncomeById = async (req, res) => {
  console.log("GET FixedIncome BY ID", req.params.id);
  try {
    const fixedIncome = await FixedIncome.findById(req.params.id);
    res.json(fixedIncome);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
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
    res.status(500).send(err);
  }
};

const updateFixedIncome = async (req, res) => {
  console.log("FixedIncome Update");
  try {
    const user = await FixedIncome.updateOne(
      { _id: req.params.id },
      { ...req.body }
    );
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
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
