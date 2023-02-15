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
        <div class="btn close-button">
          <i
            Style="color:red;font-size:25px;"
            class="fas fa-times-circle"
            onClick={() => closeTodoForm()}
          ></i>
        </div>

        <form onSubmit={handleSubmit}>
          <h2>Note</h2>

          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label for="description">Description</label>
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
              className="btn btn-success"
              value="Save"
            ></input>
          )}
          {values.id ? (
            <button
              className="btn btn-primary"
              onClick={(event) => {
                const newValues = values;
                newValues["name"] = name;
                newValues["description"] = description;
                actionUpdate(newValues);
                console.log("UPDATE BUTTON CLICK", name, description, values);
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
