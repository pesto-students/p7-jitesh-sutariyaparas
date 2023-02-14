import "./App.css";
import TodoForm from "./Todo-form.js";
import TodoList from "./Todo-list.js";
import React, { useState } from "react";

const TodoApp = () => {
  const [todoListData, setTodoListData] = useState([]);
  const createNote = (values) => {
    const list = todoListData;
    values["id"] = todoListData.length + 1;
    values["status"] = 'draft';
    list.push(values);
    setTodoListData([...list]);
  };
  const removeFromList = (values) => {
    todoListData.forEach((toDO, index) => {
      console.log(index + " : " + toDO.id);
      if (toDO.id === values.id) {
        const list = todoListData;
        list.splice(index, 1);
        setTodoListData([...list]);
        return;
      }
    });
  };

  const actionDone = (values)=>{
    todoListData.forEach((toDO, index) => {
      console.log(index + " : " + toDO.id);
      if (toDO.id === values.id) {
        const list = todoListData;
        values['status'] = 'done';
        list[index]=values
        setTodoListData([...list]);
        return;
      }
    });
  }

  return (
    <>
      <TodoForm createNote={createNote} />
      <TodoList todoListData={todoListData} removeFromList={removeFromList} actionDone={actionDone} />
    </>
  );
};

export default TodoApp;
