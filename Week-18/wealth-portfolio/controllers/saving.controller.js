const Saving = require("../models/saving.model");

const getAllSavings = async (req, res) => {
  console.log("GET All Saving..");
  try {
    const pageNumber = parseInt(req.query.page_number) || 1;
    const pageSize = parseInt(req.query.page_size) || 10;
    const skip = (pageNumber - 1) * pageSize;
    let startDate = req.query.start_date;
    let endDate = req.query.end_date;
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const totalRecordsCount = await Saving.countDocuments({
        date: {
          $gte: start,
          $lte: end,
        },
        user_id: req.params.user_id,
      });
      const totalPages = Math.ceil(totalRecordsCount / pageSize);
      const saving = await Saving.find({
        date: {
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
        saving: saving,
      });
    } else {
      const totalRecordsCount = await Saving.countDocuments();
      const totalPages = Math.ceil(totalRecordsCount / pageSize);
      const saving = await Saving.find({ user_id: req.params.user_id })
        .skip(skip)
        .limit(pageSize);
      res.json({
        total_page_count: totalPages,
        current_page: pageNumber,
        saving: saving,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: String(err) });
  }
};

const getSavingById = async (req, res) => {
  console.log("GET Saving BY ID", req.params.id);
  try {
    const saving = await Saving.findById(req.params.id);
    res.json(saving);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: String(err) });
  }
};

const createSaving = async (req, res) => {
  try {
    console.log("Create Saving", req.body);
    const SavingValue = await Saving.create({
      ...req.body,
      user_id: req.params.user_id,
    });
    res.json(SavingValue);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: String(err) });
  }
};

const updateSaving = async (req, res) => {
  console.log("Saving Update");
  try {
    const user = await Saving.updateOne(
      { _id: req.params.id },
      { ...req.body }
    );
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: String(err) });
  }
};

const deleteSaving = (req, res) => {
  console.log("Saving delete");
  Saving.deleteOne({ _id: req.params.id }).then((result) => {
    res.json(result);
  });
};

module.exports = {
  getAllSavings, //SELECT *
  getSavingById, //SELECT
  createSaving, //INSERT
  updateSaving, //UPDATE
  deleteSaving, //DELETE
};
