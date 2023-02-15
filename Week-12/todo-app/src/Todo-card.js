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
          <span>
            <h4>{values.name}</h4>
          </span>
          <span className="badge badge-success">{values.status}</span>
        </div>
        <div> Description:{values.description}</div>

        <div class="btn btn-primary btn-sm">
          <i
            Style="font-size:14px;"
            class="fas fa-edit"
            onClick={editCard}
          > Edit
          </i>
        </div>

        <div class="btn btn-success btn-sm">
          <i
            Style="font-size:14px;"
            class="fas fa-check"
            onClick={doneCard}
          > Approve
          </i>
        </div>

        <div class="btn btn-danger btn-sm">
          <i
            Style="font-size:14px;"
            class="fas fa-trash"
            onClick={removeCard}
          > Delete
          </i>
        </div>
        
      </div>
    </>
  );
};

export default TodoCard;
