import { useState } from "react";
import "../CSS/addTask.css";
import Modal from "./Modal";
import { db } from "../firebase/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
function AddTask({ onClose, open }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log(title);
  console.log(description);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "tasks"), {
        title: title,
        description: description,
        completed: false,
        created: Timestamp.now(),
      });
    } catch (error) {
      alert(error);
    }
    onClose();
  };
  return (
    <Modal modalLable="Add Task" onClose={onClose} open={open}>
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
        <button type="submit">Done</button>
      </form>
    </Modal>
  );
}

export default AddTask;
