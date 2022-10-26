import "../CSS/task.css";
import { useState } from "react";
function Task({ id, title, description, completed }) {
  const [checked, setChecked] = useState(completed);
  const [open, setOpen] = useState({ edit: false, view: false });

  const handleDelete = () => {};
  return (
    <div className={`task ${checked && "task--borderColor"}`}>
      <div>
        <input type="checkbox" />
        <label></label>
      </div>
      <div className="task__body">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="task__buttons">
          <div className="task__deleteNedit">
            <button
              className="task__editButton"
              onClick={() => setOpen({ ...open, edit: true })}
            >
              Edit
            </button>
            <button className="task__deleteButton" onClick={handleDelete}>
              Delete
            </button>
          </div>
          <button
            onClick={() =>
              setOpen({
                ...open,
                view: true,
              })
            }
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task;
