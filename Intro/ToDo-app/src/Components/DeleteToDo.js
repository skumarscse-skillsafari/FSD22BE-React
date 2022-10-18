function DeleteToDo({ todo, setToDos }) {
  console.log(todo);
  function handleDeleteToDo() {
    const confirmed = window.confirm("Do you really want to delete this?");
    if (confirmed) {
      setToDos((currentToDos) => currentToDos.filter((t) => t.id !== todo.id)); // 1 !== 1
    }
  }
  return (
    <span
      onClick={handleDeleteToDo}
      style={{
        color: "red",
        fontWeight: "bold",
        marginLeft: 10,
        cursor: "pointer",
      }}
    >
      X
    </span>
  );
}

export default DeleteToDo;
