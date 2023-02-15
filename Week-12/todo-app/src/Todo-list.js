import "./Todo-list.css";
import TodoCard from "./Todo-card.js";

const TodoList = ({ todoListData, actionRemove, actionDone, actionEdit }) => {
  const removeNote = (value) => {
    actionRemove(value);
  };
  const doneNote = (value) => {
    actionDone(value);
  };
  const editNote = (values) => {
    actionEdit(values);
  };
  return (
    <>
      <div className="card-list">
        {todoListData.map((e) => (
          <TodoCard
            values={e}
            removeNote={removeNote}
            doneNote={doneNote}
            editNote={editNote}
          ></TodoCard>
        ))}
      </div>
    </>
  );
};

export default TodoList;
