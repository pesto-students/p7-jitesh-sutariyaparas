const express = require("express");
const router = express.Router();
const weatherController = require("../controllers/weather.controller");

//Current Weather for single and multiple cities
router.get("/api/current_weather", weatherController.currentWeather);
router.get(
  "/api/current_weather_multi_city",
  weatherController.currentWeatherMultiCity
);

module.exports = router;
