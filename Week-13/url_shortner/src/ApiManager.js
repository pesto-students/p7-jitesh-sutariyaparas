const apiBaseUrl = "https://api.shrtco.de/v2/";

const getApiCall = async (endPoint = "", params = {}, data = {}) => {
  let apiUrl = new URL(endPoint, apiBaseUrl);
  apiUrl.search = new URLSearchParams(params).toString();
  apiUrl = apiUrl.toJSON();
  // API doc ref :https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  // https://shrtco.de/docs/
  const response = await fetch(apiUrl, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
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
  // API doc ref :https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  // https://shrtco.de/docs/
  const response = await fetch(apiUrl, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
  });
  if (!response.ok) {
    throw new Error("Something wrong while generating short link");
  } else {
    return response.json();
  }
};

export { getApiCall, postApiCall };
