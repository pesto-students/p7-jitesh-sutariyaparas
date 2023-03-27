const express = require("express");
const router = express.Router();

const assetController = require("../controllers/asset.controller");

const authMiddleware = require("../middleware/auth");


// Asset Routes
router.get("/api/assets", authMiddleware, assetController.getAllAssets);  //select
router.get("/api/assets/:id", authMiddleware, assetController.getAssetById); //select
router.post("/api/assets/:user_id", authMiddleware, assetController.createAsset); //insert
router.put("/api/assets/:id", authMiddleware, assetController.updateAsset); //update
router.delete("/api/assets/:id", authMiddleware, assetController.deleteAsset); //delete


module.exports = router;