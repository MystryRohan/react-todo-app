import { useState } from "react";

const AddTodo = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [completed, setCompleted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Add A Todo");
      return;
    }
    onAdd({ title, date, completed });

    setTitle("");
    setDate("");
    setCompleted(false);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Todo</label>
        <input
          type="text"
          placeholder="Add Todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input
          type="text"
          placeholder="Add Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="check">
        <label>Reminder</label>
        <input
          type="checkbox"
          value={completed}
          checked={completed}
          onChange={(e) => setCompleted(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Todo" className="subtn" />
    </form>
  );
};
export default AddTodo;
