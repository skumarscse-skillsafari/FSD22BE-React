import DeleteToDo from "./DeleteToDo";

function ToDoList({ todos, setToDos }) {
  console.log(todos);
  function handleToggleToDos(toDo) {
    console.log(toDo); // { id: 1, text: "Book Ticket", done: false }
    // if a todo's id === clicked element id then perform update operation, else not do anything
    console.log(todos);
    const updatedToDos = todos.map(
      // [ {..., done: true}, {...}, {...} ]
      (
        currentTodo // { id: 3, text: "Write Homework", done: false }
      ) =>
        currentTodo.id === toDo.id // 3 === 1
          ? { ...currentTodo, done: !currentTodo.done } // { id: 1, text: "Book Ticket", done: true }
          : currentTodo
    );
    console.log(updatedToDos);
    setToDos(updatedToDos);
  }

  if (!todos.length) {
    return <p>No ToDos...</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          onDoubleClick={() => handleToggleToDos(todo)} // { id: 1, text: "Book Ticket", done: false }
          style={{
            textDecoration: todo.done ? "line-through" : "",
          }}
        >
          {todo.text}
          <DeleteToDo todo={todo} setToDos={setToDos} />
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
