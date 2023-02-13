import "./Todo-form.css";
import React, { useState } from "react";

function TodoForm({ createNote }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    createNote({ name: name, description: description });
  };

  const removeTodo = () => {
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
        <input type="submit" value="Submit" />
        <button onClick={removeTodo}>Add</button>
        <button onClick={removeTodo}>DELETE</button>
      </form>
    </div>
  );
}

export default TodoForm;
