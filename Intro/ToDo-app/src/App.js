// import "./App.css";
import { useState } from "react";
import AddToDo from "./Components/AddToDo";
// import Demo from "./Components/Demo";
import ToDoList from "./Components/ToDoList";

function App() {
  const [todos, setToDos] = useState([
    { id: 1, text: "Book Ticket", done: false },
    { id: 2, text: "Wash cloths", done: false },
    { id: 3, text: "Write Homework", done: false },
  ]);
  console.log(todos);
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <ToDoList todos={todos} setToDos={setToDos} />
      <AddToDo setToDos={setToDos} />
      {/* <Demo /> */}
    </div>
  );
}

export default App;
