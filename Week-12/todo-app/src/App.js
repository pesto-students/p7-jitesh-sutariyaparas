import "./App.css";
import TodoForm from "./components/TodoForm/Todo-form.js";
import TodoList from "./components/TodoList/Todo-list.js";
import React, { useState} from "react";

const TodoApp = () => {
  const [todoListData, setTodoListData] = useState([]);
  const [ShowForm, setShowForm] = useState(false);
  const [FormValues, setFormValues] = useState({});
  const [NoteCount, setNoteCount] = useState(0);
  const [NoteSequence, setNoteSequence] = useState(1);

  const createNote = (values) => {
    const list = todoListData;
    values["id"] = NoteSequence;
    values["status"] = "Pending";
    list.push(values);
    setNoteSequence(NoteSequence+1)
    setTodoListData([...list]);
    setNoteCount(todoListData.length)
    closeTodoForm();
  };
  const actionRemove = (values) => {
    todoListData.forEach((toDO, index) => {
      if (toDO.id === values.id) {
        const list = todoListData;
        list.splice(index, 1);
        setTodoListData([...list]);
        setNoteCount(todoListData.length)
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
