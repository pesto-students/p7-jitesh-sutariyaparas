const Asset = require("../models/asset.model");

const getAllAssets = async (req, res) => {
  console.log("GET All Asset..");
  try {
    const pageNumber = parseInt(req.query.page_number) || 1;
    const pageSize = parseInt(req.query.page_size) || 10;
    const skip = (pageNumber - 1) * pageSize;
    let startDate = req.query.start_date;
    let endDate = req.query.end_date;
    const totalRecordsCount = await Asset.countDocuments();
    const totalPages = Math.ceil(totalRecordsCount / pageSize);
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const asset = await Asset.find({
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
        asset: asset,
      });
    } else {
      const asset = await Asset.find({ user_id: req.params.user_id })
        .skip(skip)
        .limit(pageSize);
      res.json({
        total_page_count: totalPages,
        current_page: pageNumber,
        asset: asset,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: String(err) });
  }
};

const getAssetById = async (req, res) => {
  console.log("GET Asset BY ID", req.params.id);
  try {
    const asset = await Asset.findById(req.params.id);
    res.json(asset);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: String(err) });
  }
};

const createAsset = async (req, res) => {
  try {
    console.log("Create Asset", req.body);
    const assetValue = await Asset.create({
      ...req.body,
      user_id: req.params.user_id,
    });
    res.json(assetValue);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: String(err) });
  }
};

const updateAsset = async (req, res) => {
  console.log("Asset Update");
  try {
    const user = await Asset.updateOne({ _id: req.params.id }, { ...req.body });
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: String(err) });
  }
};

const deleteAsset = (req, res) => {
  console.log("Asset delete");
  try {
    Asset.deleteOne({ _id: req.params.id }).then((result) => {
      res.json(result);
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: String(err) });
  }
};

module.exports = {
  getAllAssets, //SELECT *
  getAssetById, //SELECT
  createAsset, //INSERT
  updateAsset, //UPDATE
  deleteAsset, //DELETE
};
