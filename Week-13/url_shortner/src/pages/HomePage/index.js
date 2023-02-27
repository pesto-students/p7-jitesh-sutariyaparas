import React, { useState } from "react";
import { getApiCall } from "../../ApiManager";
import ListUrl from "../../components/ListUrl";
import "./home.css";

function HomePage() {
  console.log("HOME PAGE LOAD");

  const [urlToShort, setUrlToShort] = useState("");
  const [urlList, setUrlList] = useState([]);

  const updateListUrl = (apiResponse) => {
    if (apiResponse.ok) {
      const list = urlList;
      if (apiResponse.result) {
        list.push({
          id: apiResponse.result.code,
          fullUrl: apiResponse.result.original_link,
          shortUrl: apiResponse.result.short_link,
        });
        console.log();
        setUrlList([...list]);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    getApiCall("shorten", { url: urlToShort })
      .then((res) => {
        updateListUrl(res);
        setUrlToShort("");
      })
      .catch((e) => {
        alert(e.message);
        console.log(e.message);
      });
  };

  return (
    <div className="home-page">
      <h1>Short URL</h1>
      <p>Paste the URL to be shortened</p>
      <p>ShortURL is a free service to shorten URLs and create short links</p>
      <form className="url-form" onSubmit={handleSubmit}>
        <input
          id="name"
          type="text"
          value={urlToShort}
          onChange={(e) => setUrlToShort(e.target.value)}
          placeholder="www.example.com"
        ></input>
        <button>Submit</button>
      </form>
      <ListUrl urlList={urlList}></ListUrl>
    </div>
  );
}

export default HomePage;
