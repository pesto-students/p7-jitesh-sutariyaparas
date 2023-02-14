import "./App.css";
import TodoForm from "./Todo-form.js";
import TodoList from "./Todo-list.js";
import React, { useState } from "react";

const TodoApp = () => {
  const [todoListData, setTodoListData] = useState([]);
  const [ShowForm, setShowForm] = useState(false);
  const [FormValues, setFormValues] = useState({});
  const createNote = (values) => {
    const list = todoListData;
    values["id"] = todoListData.length + 1;
    values["status"] = "draft";
    list.push(values);
    setTodoListData([...list]);
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
        values["status"] = "done";
        list[index] = values;
        setTodoListData([...list]);
        return;
      }
    });
  };

  const showTodoForm = (values) => {
    console.log("Show POPUP clicked");
    setShowForm(true);
  };

  const closeTodoForm = (values) => {
    console.log("Show POPUP clicked");
    setShowForm(false);
    setFormValues({});
  };

  const actionEdit = (values) => {
    setShowForm(true);
    console.log("EDIT ACTION__", values);
    setFormValues(values);
  };

  return (
    <>
      <button onClick={showTodoForm}>Add note</button>
      {ShowForm ? (
        <TodoForm
          createNote={createNote}
          closeTodoForm={closeTodoForm}
          values={FormValues}
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
    </>
  );
};

export default TodoApp;
