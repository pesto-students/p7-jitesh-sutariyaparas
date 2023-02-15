import "./Todo-form.css";
import React, { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimes  } from '@fortawesome/free-solid-svg-icons';

const TodoForm = ({ createNote, closeTodoForm, values, actionUpdate }) => {
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
        <div className="btn close-button">
          <i
            className="fas fa-times-circle"
            onClick={() => closeTodoForm()}
          ></i>
        </div>
        <form onSubmit={handleSubmit}>
          <h2 className="todo-form-header" >Note</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              placeholder="Enter your name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              rows="5"
              placeholder="Enter a description"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          {values.id ? (
            <></>
          ) : (
            <input
              type="submit"
              className="btn btn-success form-button"
              value="Save"
            ></input>
          )}
          {values.id ? (
            <button
              className="btn btn-primary form-button"
              onClick={(event) => {
                const newValues = values;
                newValues["name"] = name;
                newValues["description"] = description;
                actionUpdate(newValues);
                event.preventDefault();
              }}
            >
              UPDATE
            </button>
          ) : (
            <></>
          )}
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
