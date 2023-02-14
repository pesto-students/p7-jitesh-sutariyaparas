import "./Todo-list.css";
import TodoCard from "./Todo-card.js";

const TodoList = ({ todoListData, removeFromList }) => {
  const removeNote = (value) => {
    removeFromList(value);
  };
  return (
    <>
      <div>
        {todoListData.map((e) => (
          <TodoCard values={e} removeNote={removeNote}></TodoCard>
        ))}
      </div>
    </>
  );
};

export default TodoList;
