const Saving = require("../models/saving.model");


const getAllSavings = async (req, res) => {
  console.log("GET All Saving..");
  try {
    const saving = await Saving.find({"user_id":req.params.user_id});
    res.json(saving);
  } catch (err) {
    console.log(err);
  }
};

const getSavingById = async (req, res) => {
  console.log("GET Saving BY ID", req.params.id);
  try {
    const saving = await Saving.findById(req.params.id);
    res.json(saving);
  } catch (err) {
    console.log(err);
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
  }
};

const updateSaving = async (req, res) => {
  console.log("Saving Update");
  try {
    const user = await Saving.updateOne({ _id: req.params.id }, { ...req.body });
    res.json(user);
  } catch (err) {
    console.log(err);
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