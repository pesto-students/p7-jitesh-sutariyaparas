// import "./Todo-list.css";
// import React, { useState } from "react";

function TodoCard({values,removeNote}) {

  const removeCard = () => {
    removeNote(values);
  };

  return (
    <>
      <div className="todo-list">
        {values.name}
        {values.description}
        <button onClick={removeCard}>DELETE</button>
      </div>
    </>
  );
}

export default TodoCard;
