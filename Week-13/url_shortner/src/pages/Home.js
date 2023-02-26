import { useState } from "react";
import { getApiCall } from "../ApiManager.js";

const Home = () => {
  console.log("HOME PAGE LOAD");

  const [urlToShort, setUrlToShort] = useState("");
  const [urlList, setUrlList] = useState([{ name: "paras" }]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const list = urlList;
    list.push({ id: 1, url: urlToShort, shortUrl: "" });
    setUrlList([...list]);

    getApiCall("shorten", { url: urlToShort })
      .then((res) => {
        console.log("API CALL response", res);
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
      {/* <div>{urlList.toString()}</div> */}
    </div>
  );
};

export default Home;
