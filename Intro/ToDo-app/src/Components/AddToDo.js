function AddToDo({ setToDos }) {
  // console.log(setToDos);
  function handleAddToDo(e) {
    e.preventDefault();
    console.log(e.target.elements.addTodo.value);
    const text = e.target.elements.addTodo.value;

    const todo = {
      id: 4,
      text,
      done: false,
    };
    console.log(todo);
    setToDos((prevTodos) => {
      return [...prevTodos, todo];
    });
  }
  return (
    <form onSubmit={handleAddToDo}>
      <input name="addTodo" type="text" placeholder="Add new todo" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddToDo;
