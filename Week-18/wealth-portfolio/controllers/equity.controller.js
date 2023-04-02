const Equity = require("../models/equity.model");

const getAllEquities = async (req, res) => {
  console.log("GET All Equity..");
  try {
    let startDate = req.query.start_date;
    let endDate = req.query.end_date;
    const pageNumber = parseInt(req.query.page_number) || 1;
    const pageSize = parseInt(req.query.page_size) || 10;
    const skip = (pageNumber - 1) * pageSize;
    const totalRecordsCount = await Equity.countDocuments();
    const totalPages = Math.ceil(totalRecordsCount / pageSize);
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const equity = await Equity.find({
        purchase_date: {
          $gte: start,
          $lte: end,
        },
        user_id: req.params.user_id,
      })
        .skip(skip)
        .limit(pageSize);
      res.json({
        total_page_count: totalPages,
        current_page: pageNumber,
        equity: equity,
      });
    } else {
      const equity = await Equity.find({ user_id: req.params.user_id })
        .skip(skip)
        .limit(pageSize);
      res.json({
        total_page_count: totalPages,
        current_page: pageNumber,
        equity: equity,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: String(err) });
  }
};

const getEquityById = async (req, res) => {
  console.log("GET Equity BY ID", req.params.id);
  try {
    const equity = await Equity.findById(req.params.id);
    res.json(equity);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: String(err) });
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
    res.status(500).send({ error: String(err) });
  }
};

const updateEquity = async (req, res) => {
  console.log("Equity Update");
  try {
    const user = await Equity.updateOne(
      { _id: req.params.id },
      { ...req.body }
    );
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: String(err) });
  }
};

const deleteEquity = (req, res) => {
  console.log("Equity delete");
  try {
    Equity.deleteOne({ _id: req.params.id }).then((result) => {
      res.json(result);
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: String(err) });
  }
};

module.exports = {
  getAllEquities, //SELECT *
  getEquityById, //SELECT
  createEquity, //INSERT
  updateEquity, //UPDATE
  deleteEquity, //DELETE
};
