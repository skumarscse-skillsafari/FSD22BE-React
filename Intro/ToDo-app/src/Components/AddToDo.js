import { useRef } from "react";
import { v4 as uuid } from "uuid";

function AddToDo({ setToDos }) {
  // console.log(setToDos);
  // console.log(uuid());
  const inputRef = useRef();
  function handleAddToDo(e) {
    e.preventDefault();
    console.log(inputRef.current);
    // console.log(e.target.elements.addTodo.value);
    // const text = e.target.elements.addTodo.value;
    // console.log(inputRef.current.value);
    const text = inputRef.current.value;

    const todo = {
      id: uuid(),
      text,
      done: false,
    };
    console.log(todo);
    setToDos((prevTodos) => {
      return [...prevTodos, todo];
    });
    inputRef.current.value = "";
  }
  return (
    <form onSubmit={handleAddToDo}>
      <input
        name="addTodo"
        type="text"
        placeholder="Add new todo"
        ref={inputRef}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddToDo;
