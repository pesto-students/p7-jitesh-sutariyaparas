import React from "react";
import "./list_url.css"

const ListUrl = ({ urlList }) => {
  const listItems = urlList.map((list) => (
    <div className="url-card" key={list.id}>
      <div>{list.fullUrl}</div>
      <div>{list.shortUrl}</div>
    </div>
  ));
  return <div className="url-list">{listItems}</div>;
};

export default ListUrl;
