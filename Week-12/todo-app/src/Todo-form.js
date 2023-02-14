import "./Todo-form.css";
import React, { useState } from "react";

const TodoForm = ({ createNote, todoListData }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    createNote({
      name: name,
      description: description,
      id: todoListData.length + 1,
    });
    setDescription("");
    setName("");
  };

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="submit" value="Add note" />
      </form>
    </div>
  );
};

export default TodoForm;
