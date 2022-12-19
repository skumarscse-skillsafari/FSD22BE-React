import express from "express";
import {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/tasksController.js";
const router = express.Router();
// Getting All tasks
// http://localhost:5000/api/v1/tasks
// get()
router.get("/", getAllTasks);

// Get Single
// http://localhost:5000/api/v1/tasks/:id
// get()
router.get("/:id", getSingleTask);

// Create task
// http://localhost:5000/api/v1/tasks
// post()
router.post("/", createTask);

// Update task
// http://localhost:5000/api/v1/tasks/:id
// put()
router.put("/:id", updateTask);

// Delete task
// http://localhost:5000/api/v1/tasks/:id
// delete()
router.delete("/:id", deleteTask);

export default router;
