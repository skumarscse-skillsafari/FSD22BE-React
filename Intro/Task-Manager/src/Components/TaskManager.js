import "../CSS/taskManager.css";
import { useState, useEffect } from "react";
import Task from "./Task";
import AddTask from "./AddTask";
import { db } from "../firebase/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
function TaskManager() {
  const [openAddModel, setOpenAddModel] = useState(false);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const taskColRef = query(
      collection(db, "tasks"),
      orderBy("created", "desc")
    );
    console.log(taskColRef);
    onSnapshot(taskColRef, (snapshot) => {
      console.log(snapshot.docs);
      setTasks(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  console.log(tasks);
  return (
    <div className="taskManager">
      <header>Task Manager</header>
      <div className="taskManager__container">
        <button onClick={() => setOpenAddModel(true)}>Add task +</button>
        <div className="taskManager__tasks">
          {tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              title={task.data.title}
              description={task.data.description}
              completed={task.data.completed}
            />
          ))}
        </div>
      </div>
      {openAddModel && (
        <AddTask onClose={() => setOpenAddModel(false)} open={openAddModel} />
      )}
    </div>
  );
}

export default TaskManager;
