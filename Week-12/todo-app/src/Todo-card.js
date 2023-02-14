// import "./Todo-list.css";
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
      <div className="todo-list">
        Title:{values.name}
        Description:{values.description}
        ID:{values.id}
        status:{values.status}
        <button onClick={removeCard}>DELETE</button>
        <button onClick={doneCard}>DONE</button>
        <button onClick={editCard}>EDIT</button>
      </div>
    </>
  );
};

export default TodoCard;
