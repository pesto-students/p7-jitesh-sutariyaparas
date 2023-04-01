const express = require("express");
const router = express.Router();

const savingController = require("../controllers/saving.controller");

const authMiddleware = require("../middleware/auth");


// Saving Routes
router.get("/api/savings/user/:user_id", authMiddleware, savingController.getAllSavings);  //select
router.get("/api/savings/:id", authMiddleware, savingController.getSavingById); //select
router.post("/api/savings/:user_id", authMiddleware, savingController.createSaving); //insert
router.put("/api/savings/:id", authMiddleware, savingController.updateSaving); //update
router.delete("/api/savings/:id", authMiddleware, savingController.deleteSaving); //delete


module.exports = router;