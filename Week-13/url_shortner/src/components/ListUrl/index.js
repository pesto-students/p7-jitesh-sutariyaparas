import React from "react";

const ListUrl = ({ urlList }) => {
  const listItems = urlList.map((list) => (
    <div style={{ color: "red" }}>
      <div>{list.fullUrl}</div>
      <div>{list.shortUrl}</div>
    </div>
  ));
  return <div>{listItems}</div>;
};

export default ListUrl;
