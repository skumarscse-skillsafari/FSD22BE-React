import "../CSS/taskManager.css";
import { useState } from "react";
import Task from "./Task";
import AddTask from "./AddTask";
function TaskManager() {
  const [openAddModel, setOpenAddModel] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1001,
      title: "This is first title",
      description: "This is first description",
      completed: true,
    },
    {
      id: 1002,
      title: "This is second title",
      description: "This is second description",
      completed: true,
    },
  ]);
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
              title={task.title}
              description={task.description}
              completed={task.completed}
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
