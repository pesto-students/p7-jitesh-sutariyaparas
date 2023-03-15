const WeatherApiKey = de21d72d3d2e4a54a9e102925231403;

const apiBaseUrl = "http://api.weatherapi.com/v1/";

const getApiCall = async (endPoint = "", params = {}, data = {}) => {
  params["key"] = WeatherApiKey;
  let apiUrl = new URL(endPoint, apiBaseUrl);
  apiUrl.search = new URLSearchParams(params).toString();
  apiUrl = apiUrl.toJSON();
  // API doc ref :https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  // https://shrtco.de/docs/
  const response = await fetch(apiUrl, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
  });
  if (!response.ok) {
    throw new Error("Something wrong while generating short link");
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
    alert("something went wrong please try again or check input URL");
    throw new Error("Something wrong while generating short link");
  } else {
    return response.json();
  }
};

export { getApiCall, postApiCall };
