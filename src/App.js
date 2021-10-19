import { useState } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
// import Button from "./components/Button";

const App = () => {
  const [showBtn, setShowBtn] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "module 1",
      completed: false,
      date: "10 Dec 21",
    },
    {
      id: 2,
      title: "module 2",
      completed: true,
      date: "12 Dec 21",
    },
    { id: 3, title: "module 3", completed: false, date: "10 Dec 21" },
    {
      id: 4,
      title: "module 2",
      completed: true,
      date: "12 Dec 21",
    },
    { id: 5, title: "module 3", completed: false, date: "10 Dec 21" },
    {
      id: 6,
      title: "module 2",
      completed: true,
      date: "12 Dec 21",
    },
    { id: 7, title: "module 3", completed: false, date: "10 Dec 21" },
  ]);

  //add todo
  const addTodo = (todo) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTodo = { id, ...todo };
    setTodos([...todos, newTodo]);
  };

  //delete todo
  const delTodo = (id) => {
    setTodos(todos.filter((task) => task.id !== id));
  };

  // toggle complete
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  // const showThemes = ()=>{
  //   const constainer = document.getElementsByClassName(".container")

  // }
  return (
    <div className="container">
      <Header onAdd={() => setShowBtn(!showBtn)} showBtn={showBtn} />
      {showBtn && <AddTodo onAdd={addTodo} />}
      {todos.length > 0 ? (
        <Todos todos={todos} onDelete={delTodo} onToggle={toggleComplete} />
      ) : (
        "No Pending Tasks"
      )}
      {/* <Button className="theme-btn" text="Themes" onClick={showThemes} /> */}
    </div>
  );
};
export default App;
