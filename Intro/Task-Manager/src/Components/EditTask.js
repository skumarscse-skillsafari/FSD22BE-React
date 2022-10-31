import Modal from "./Modal";
import "../CSS/editTask.css";
import { useState } from "react";
function EditTask({ open, onClose, toEditTitle, toEditDescription, id }) {
  const [title, setTitle] = useState(toEditTitle);
  const [description, setDescription] = useState(toEditDescription);
  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <Modal modalLable="Edit Task" onClose={onClose} open={open}>
      <form className="addTask" name="addTask" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value.toUpperCase())}
          value={title}
          placeholder="Enter task title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
        ></textarea>
        <button type="submit">Edit</button>
      </form>
    </Modal>
  );
}

export default EditTask;
