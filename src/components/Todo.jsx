import { FaTimes } from "react-icons/fa";
const Todo = ({ todo, onDelete, onToggle }) => {
  return (
    <div className={`todo ${todo.completed ? "completed" : ""}`}>
      <h3 onDoubleClick={() => onToggle(todo.id)}>
        {todo.title}{" "}
        <FaTimes
          className="del-todo"
          cursor="pointer"
          onClick={() => onDelete(todo.id)}
        />
      </h3>
      <p>{todo.date}</p>
    </div>
  );
};
export default Todo;
