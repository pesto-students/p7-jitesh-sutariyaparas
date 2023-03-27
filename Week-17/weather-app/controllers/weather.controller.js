const apiService = require("./ApiManager");

// API DOC https://openweathermap.org/current

const currentWeather = async (req, res) => {
  try {
    query = { q: req.query.city };
    data = await apiService.getApiCall("2.5/weather", query);
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};

const currentWeatherMultiCity = async (req, res) => {
  try {
    const chunkSize = 2;
    let weatherData = [];
    let cityChunk = [];
    let page = req.query.page || 1;
    let cityList = req.query.cities;
    if (cityList) {
      cityList = [...cityList.split(",")];
      for (let i = 0; i < cityList.length; i += chunkSize) {
        const chunk = cityList.slice(i, i + chunkSize);
        cityChunk.push(chunk);
      }
      if (page - 1 < cityChunk.length && page > 0) {
        for (city of cityChunk[page - 1]) {
          query = { q: city };
          data = await apiService.getApiCall("2.5/weather", query);
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

module.exports = { currentWeather, currentWeatherMultiCity };
