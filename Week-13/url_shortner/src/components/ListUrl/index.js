import React from "react";
import "./list_url.css";

const ListUrl = ({ urlList }) => {
  const listItems = urlList.map((list) => (
    <div className="url-card" key={list.id}>
      <div><strong>URL:</strong> {list.fullUrl}</div>
      <div>
        <span><strong>Short URL:</strong> {list.shortUrl}</span>
        <span>
          <div className="btn card-edit-btn card-btn">
            <i
              className="fas fa-copy"
              onClick={() => {
                navigator.clipboard.writeText(list.shortUrl);
              }}
            > Copy</i>
          </div>
        </span>
      </div>
    </div>
  ));
  return <div className="url-list">{listItems}</div>;
};

export default ListUrl;
