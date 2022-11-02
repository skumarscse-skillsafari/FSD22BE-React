import Modal from "./Modal";
import "../CSS/editTask.css";
import { useState } from "react";
import { db } from "../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
function EditTask({ open, onClose, toEditTitle, toEditDescription, id }) {
  const [title, setTitle] = useState(toEditTitle);
  const [description, setDescription] = useState(toEditDescription);
  const handleUpdate = async (e) => {
    e.preventDefault();
    const taskDocRef = doc(db, "tasks", id);
    console.log(taskDocRef);
    try {
      await updateDoc(taskDocRef, { title, description });
    } catch (error) {
      alert(error);
    }
    onClose();
  };
  return (
    <Modal modalLable="Edit Task" onClose={onClose} open={open}>
      <form className="addTask" name="addTask" onSubmit={handleUpdate}>
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
