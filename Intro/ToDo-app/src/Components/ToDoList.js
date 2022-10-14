function ToDoList({ todos, setToDos }) {
  console.log(todos);
  function handleToggleToDos(toDo) {
    console.log(toDo);
    // if a todo's id === clicked element id then perform update operation, else not do anything
    console.log(todos);
    const updatedToDos = todos.map((currentTodo) =>
      currentTodo.id === toDo.id
        ? { ...currentTodo, done: !currentTodo.done }
        : currentTodo
    );
    console.log(updatedToDos);
    setToDos(updatedToDos);
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          onDoubleClick={() => handleToggleToDos(todo)}
          style={{
            textDecoration: todo.done ? "line-through" : "",
          }}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
