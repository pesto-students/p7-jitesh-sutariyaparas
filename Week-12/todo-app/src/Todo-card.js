// import "./Todo-list.css";
// import React, { useState } from "react";

const TodoCard = ({ values, removeNote, doneNote}) => {
  const removeCard = () => {
    removeNote(values);
  };
  const doneCard = () =>{
    doneNote(values)
  }

  return (
    <>
      <div className="todo-list">
        Title:{values.name}
        Description:{values.description}
        ID:{values.id}
        status:{values.status}
        <button onClick={removeCard}>DELETE</button>
        <button onClick={doneCard}>DONE</button>
      </div>
    </>
  );
};

export default TodoCard;
