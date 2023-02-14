import "./Todo-form.css";
import React, { useState } from "react";

const TodoForm = ({ createNote, closeTodoForm, values }) => {
  const [name, setName] = useState(values.name);
  const [description, setDescription] = useState(values.description);
  const handleSubmit = (event) => {
    event.preventDefault();
    createNote({
      name: name,
      description: description,
      id: values.id,
      status: values.status,
    });
    setDescription("");
    setName("");
  };

  return (
    <div className="todo-box">
      <div className="todo-form">
        <button onClick={() => closeTodoForm()}>Close</button>
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
          {values.id ? <></> : <input type="submit" value="Add note" />}
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
