// import logo from './logo.svg';
import "./App.css";
import TodoForm from "./Todo-form.js";
import TodoList from "./Todo-list.js";
import React, { useState } from "react";

function TodoApp() {
  const [todoListData, setTodoListData] = useState([]);
  const createNote = (values) => {
    const list = todoListData;
    list.push(values);
    setTodoListData([...list]);
  };

  return (
    <>
      <TodoForm createNote={createNote} />
      <TodoList listData={todoListData} />
    </>
  );
}

export default TodoApp;
