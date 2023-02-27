import React from "react";
import "./list_url.css";

const ListUrl = ({ urlList }) => {
  const listItems = urlList.map((list) => (
    <div className="url-card" key={list.id}>
      <div>{list.fullUrl}</div>
      <div>
        <span>{list.shortUrl}</span>
        <span>
          <div className="btn card-edit-btn card-btn">
            <i
              className="fas fa-copy"
              onClick={() => {
                navigator.clipboard.writeText(list.shortUrl);
              }}
            ></i>
          </div>
        </span>
      </div>
    </div>
  ));
  return <div className="url-list">{listItems}</div>;
};

export default ListUrl;
