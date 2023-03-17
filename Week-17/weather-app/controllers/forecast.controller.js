const apiService = require("./ApiManager");

// API DOC https://openweathermap.org/current

const dailyForecast = async (req, res) => {
  console.log("dailyForecast Call", req.query);
  try {
    let days = req.query.days || 3;
    query = { q: req.query.city, days: Number(days) };
    data = await apiService.getApiCall(
      "forecast.json",
      // "2.5/forecast/daily",
      query,
      (data = {}),
      "weather_api"
    );
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};

const dailyForecastMultiCity = async (req, res) => {
  console.log("dailyForecastMultiCity call");
  try {
    const chunkSize = 2;
    let weatherData = [];
    let cityChunk = [];
    let page = req.query.page || 1;
    let days = req.query.days || 3;
    let cityList = req.query.cities;
    if (cityList) {
      cityList = [...cityList.split(",")];
      for (let i = 0; i < cityList.length; i += chunkSize) {
        const chunk = cityList.slice(i, i + chunkSize);
        cityChunk.push(chunk);
      }
      if (page - 1 < cityChunk.length && page > 0) {
        for (city of cityChunk[page - 1]) {
          query = { q: city, cnt: Number(days) };
          data = await apiService.getApiCall(
            "forecast.json",
            // "2.5/forecast/daily",
            query,
            "weather_api"
          );
          weatherData.push(data);
        }
      }
    }
    let weatherResponse = {
      current_page: page,
      total_page_count: cityChunk.length,
      weather_data: weatherData,
    };
    res.json(weatherResponse);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { dailyForecast, dailyForecastMultiCity };
