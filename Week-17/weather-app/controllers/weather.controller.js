const apiService = require("./ApiManager");

// API DOC https://openweathermap.org/current

const weather = async (req, res) => {
  try {
    query = {q:req.query.city}
    data = await apiService.getApiCall("2.5/weather", query);
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { weather };
