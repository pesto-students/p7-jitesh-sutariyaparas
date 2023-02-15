import "./App.css";
import TodoForm from "./components/TodoForm/Todo-form.js";
import TodoList from "./components/TodoList/Todo-list.js";
import React, { useState, useEffect } from "react";

const TodoApp = () => {
  const [todoListData, setTodoListData] = useState([]);
  const [ShowForm, setShowForm] = useState(false);
  const [FormValues, setFormValues] = useState({});
  const [NoteCount, setNoteCount] = useState(0);

  useEffect(() => {
    setNoteCount(todoListData.length);
  }, [todoListData]);

  const createNote = (values) => {
    const list = todoListData;
    values["id"] = todoListData.length + 1;
    values["status"] = "Pending";
    list.push(values);
    setTodoListData([...list]);
    closeTodoForm();
  };
  const actionRemove = (values) => {
    todoListData.forEach((toDO, index) => {
      if (toDO.id === values.id) {
        const list = todoListData;
        list.splice(index, 1);
        setTodoListData([...list]);
        return;
      }
    });
  };

  const actionDone = (values) => {
    todoListData.forEach((toDO, index) => {
      if (toDO.id === values.id) {
        const list = todoListData;
        values["status"] = "Done";
        list[index] = values;
        setTodoListData([...list]);
        return;
      }
    });
  };

  const showTodoForm = (values) => {
    setShowForm(true);
  };

  const closeTodoForm = (values) => {
    setShowForm(false);
    setFormValues({});
  };

  const actionEdit = (values) => {
    setShowForm(true);
    setFormValues(values);
  };

  const actionUpdate = (values) => {
    const list = todoListData;
    todoListData.forEach((toDO, index) => {
      if (toDO.id === values.id) {
        list[index] = values;
        setTodoListData([...list]);
        setFormValues({});
        setShowForm(false);
        return;
      }
    });
  };

  return (
    <div className="todo-app">
      <header>
        <div>
          <span><img className="app-icon" src={process.env.PUBLIC_URL + "/todo.png"} alt="TODO"/></span>
          <span><h2>ToDo Application</h2></span>
        </div>
      </header>
      <div className="body-header">
        <div className="btn btn-success btn-sm btn-add" onClick={showTodoForm}>
          <i className="fas fa-plus-circle"> Add note</i>
        </div>
        <span> Total note: {NoteCount}</span>
      </div>

      {ShowForm ? (
        <TodoForm
          createNote={createNote}
          closeTodoForm={closeTodoForm}
          values={FormValues}
          actionUpdate={actionUpdate}
        />
      ) : (
        <></>
      )}

      <TodoList
        todoListData={todoListData}
        actionRemove={actionRemove}
        actionDone={actionDone}
        actionEdit={actionEdit}
      />
      <footer></footer>
    </div>
  );
};

export default TodoApp;
