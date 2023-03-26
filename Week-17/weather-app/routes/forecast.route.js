const express = require("express");
const router = express.Router();
const forecastController = require("../controllers/forecast.controller");

//Daily Weather forecast for single and multiple cities
router.get("/api/daily_forecast", forecastController.dailyForecast);
router.get(
  "/api/daily_forecast_multi_city",
  forecastController.dailyForecastMultiCity
);

module.exports = router;
