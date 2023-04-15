import React from "react";
import "./list_url.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ListUrl = ({ urlList }) => {
  const listItems = urlList.map((list) => (
    <div className="url-card" key={list.id}>
      <div>
        <strong>URL:</strong> {list.fullUrl}
      </div>
      <div>
        <span>
          <strong>Short URL:</strong> {list.shortUrl}
        </span>
        <span>
          <div className="btn card-edit-btn card-btn">
            <i
              className="fas fa-copy"
              onClick={() => {
                navigator.clipboard.writeText(list.shortUrl);
                toast.success("Short Link Copy Success", {
                  position: toast.POSITION.TOP_RIGHT,
                });
              }}
            >
              {" "}
               Copy
            </i>
          </div>
        </span>
      </div>
      <ToastContainer hideProgressBar={true} />
    </div>
  ));
  return <div className="url-list">{listItems}</div>;
};

export default ListUrl;
