import "../CSS/taskManager.css";
import { useState } from "react";
import Task from "./Task";
function TaskManager() {
  const [tasks, setTasks] = useState([
    {
      id: 1001,
      title: "This is first title",
      description: "This is first description",
      completed: false,
    },
    {
      id: 1002,
      title: "This is second title",
      description: "This is second description",
      completed: false,
    },
  ]);
  return (
    <div className="taskManager">
      <header>Task Manager</header>
      <div className="taskManager__container">
        <button>Add task +</button>
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
    </div>
  );
}

export default TaskManager;
