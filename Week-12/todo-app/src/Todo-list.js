import "./Todo-list.css";
import TodoCard from "./Todo-card.js";

const TodoList = ({ todoListData, removeFromList,actionDone}) => {
  const removeNote = (value) => {
    removeFromList(value);
  };
  const doneNote = (value) =>{
    actionDone(value);
  }
  return (
    <>
      <div>
        {todoListData.map((e) => (
          <TodoCard values={e} removeNote={removeNote} doneNote={doneNote}></TodoCard>
        ))}
      </div>
    </>
  );
};

export default TodoList;
