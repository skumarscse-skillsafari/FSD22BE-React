import Tasks from "../models/tasksModel.js";
// Get all the tasks
export const getAllTasks = (req, res) => {
  res.status(200).send("<h2>Get all the tasks</h2>");
};

// Get single task
export const getSingleTask = (req, res) => {
  res.status(200).send("<h2>Get single task</h2>");
};

// Create task
export const createTask = async (req, res) => {
  const taskData = req.body;
  // console.log(taskData);
  const newTasksData = new Tasks(taskData);
  try {
    await newTasksData.save();
    res.status(201).json({
      success: true,
      data: newTasksData,
      msg: "Tasks created successfully",
    });
  } catch (error) {
    res.status(400).json({ success: false, msg: error });
  }
};

// Update task
export const updateTask = (req, res) => {
  res.status(200).send("<h2>Update task</h2>");
};

// Delete task
export const deleteTask = (req, res) => {
  res.status(200).send("<h2>Delete task</h2>");
};
