import { useState } from "react";
import { getApiCall } from "../ApiManager.js";
import ListUrl from "../components/ListUrl";

const Home = () => {
  console.log("HOME PAGE LOAD");

  const [urlToShort, setUrlToShort] = useState("");
  const [urlList, setUrlList] = useState([{ fullUrl: "", shortUrl: "" }]);

  const updateListUrl = (apiResponse) => {
    if (apiResponse.ok) {
      const list = urlList;
      list.push({
        key: 1,
        fullUrl: apiResponse.result.original_link,
        shortUrl: apiResponse.result.short_link,
      });
      setUrlList([...list]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    getApiCall("shorten", { url: urlToShort })
      .then((res) => {
        console.log("API CALL response", res);
        updateListUrl(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <div className="App">
      <div>HOME PAGE</div>
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          type="text"
          value={urlToShort}
          onChange={(e) => setUrlToShort(e.target.value)}
        ></input>
        <button>Submit</button>
      </form>
      <ListUrl urlList={urlList}></ListUrl>
    </div>
  );
};

export default Home;
