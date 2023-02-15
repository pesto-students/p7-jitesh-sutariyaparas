import "./Todo-list.css";
import React from "react";

const TodoCard = ({ values, removeNote, doneNote, editNote }) => {
  const removeCard = () => {
    removeNote(values);
  };
  const doneCard = () => {
    doneNote(values);
  };
  const editCard = () => {
    editNote(values);
  };

  return (
    <>
      <div className="todo-card">
        <div>
          {values.status === "Pending" ? (
            <span className="note-status badge progress-bar-warning">
              {values.status}
            </span>
          ) : (
            <span className="note-status badge progress-bar-success">
              {values.status}
            </span>
          )}

          <span>
            <h4>{values.name}</h4>
          </span>
        </div>
        <div className="description-field">{values.description}</div>

        <div className="btn card-edit-btn card-btn">
          <i className="fas fa-edit" onClick={editCard}>
            Edit
          </i>
        </div>
        {values.status === "Pending" ? (
          <div className="btn card-approve-btn card-btn">
            <i className="fas fa-check" onClick={doneCard}>
              Approve
            </i>
          </div>
        ) : (
          <></>
        )}
        <div className="btn card-remove-btn card-btn">
          <i className="fas fa-trash" onClick={removeCard}></i>
        </div>
      </div>
    </>
  );
};


export default TodoCard;
