const Asset = require("../models/asset.model");


const getAllAssets = async (req, res) => {
  console.log("GET All Asset");
  try {
    const asset = await Asset.find();
    res.json(asset);
  } catch (err) {
    console.log(err);
  }
};

const getAssetById = async (req, res) => {
  console.log("GET Asset BY ID", req.params.id);
  try {
    const asset = await Asset.findById(req.params.id);
    res.json(asset);
  } catch (err) {
    console.log(err);
  }
};

const createAsset = async (req, res) => {
  try {
    console.log("Create Asset", req.body);
    const assetValue = await Asset.create({
      ...req.body,
      userId: req.param.user_id,
    });
    res.json(assetValue);
  } catch (err) {
    console.log(err);
  }
};

const updateAsset = async (req, res) => {
  console.log("Asset Update");
  try {
    const user = await Asset.updateOne({ _id: req.params.id }, { ...req.body });
    res.json(user);
  } catch (err) {
    console.log(err);
  }
};

const deleteAsset = (req, res) => {
  console.log("Asset delete");
  Asset.deleteOne({ _id: req.params.id }).then((result) => {
    res.json(result);
  });
};

module.exports = {
  getAllAssets, //SELECT *
  getAssetById, //SELECT
  createAsset, //INSERT
  updateAsset, //UPDATE
  deleteAsset, //DELETE
};