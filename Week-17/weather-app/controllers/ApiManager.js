const openWeatherApiKey = process.env.OPEN_WEATHER_API_KEY;
const openWeatherBaseUrl = process.env.OPEN_WEATHER_API_BASE_URL;

const WeatherApiKey = process.env.WEATHER_API_KEY;
const WeatherBaseUrl = process.env.WEATHER_API_BASE_URL;

const getApiCall = async (
  endPoint = "",
  params = {},
  data = {},
  apiService
) => {
  let baseUrl = "";
  if (apiService == "open_weather_api") {
    console.log("IF PART", apiService, openWeatherBaseUrl);
    params["appid"] = openWeatherApiKey;
    baseUrl = openWeatherBaseUrl;
  } else {
    params["key"] = WeatherApiKey;
    baseUrl = WeatherBaseUrl;
  }
  let apiUrl = new URL(endPoint, baseUrl);
  apiUrl.search = new URLSearchParams(params).toString();
  apiUrl = apiUrl.toJSON();
  // API doc ref :https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  const response = await fetch(apiUrl, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
  });
  if (!response.ok) {
    // throw new Error("Something wrong while generating short link");
    console.log("Error: Something wrong while generating short link");
    return response.json();
  } else {
    return response.json();
  }
};

const postApiCall = async (endPoint = "", params = {}, data = {}) => {
  let apiUrl = new URL(endPoint, apiBaseUrl);
  apiUrl.search = new URLSearchParams(params).toString();
  apiUrl = apiUrl.toJSON();
  const response = await fetch(apiUrl, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
  });
  if (!response.ok) {
    alert("something went wrong please try again");
    throw new Error("Something wrong while generating short link");
  } else {
    return response.json();
  }
};

module.exports = { getApiCall, postApiCall };
