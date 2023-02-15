import "./Todo-list.css";
// import React, { useState } from "react";

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
          {values.status === "Draft" ? (
            <span Style="float:right" className="badge progress-bar-warning">
              {values.status}
            </span>
          ) : (
            <span Style="float:right" className="badge progress-bar-success">
              {values.status}
            </span>
          )}

          <span>
            <h4>{values.name}</h4>
          </span>
        </div>
        <div> Description:{values.description}</div>

        <div class="btn card-edit-btn card-btn">
          <i class="fas fa-edit" onClick={editCard}>
            Edit
          </i>
        </div>

        <div class="btn card-approve-btn card-btn">
          <i class="fas fa-check" onClick={doneCard}>
            Approve
          </i>
        </div>
        <div class="btn card-remove-btn card-btn">
          <i class="fas fa-trash" onClick={removeCard}>
            Remove
          </i>
        </div>
      </div>
    </>
  );
};

export default TodoCard;
