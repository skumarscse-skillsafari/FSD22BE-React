import Tasks from "../models/tasksModel.js";
// Get all the tasks
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find(); // Return array of all the tasks stored in the databas
    res.status(200).json({
      success: true,
      data: tasks,
      msg: "All the tasks fetched successfully",
    });
  } catch (error) {
    res.status(400).json({ success: false, msg: error });
  }
};

// Get single task
export const getSingleTask = async (req, res) => {
  const { id } = req.params;
  try {
    const singleTask = await Tasks.findById(id); // return the task matches the id
    res.status(200).json({
      success: true,
      data: singleTask,
      msg: `Task with id: ${id} fetched successfully`,
    });
  } catch (error) {
    res.status(400).json({ success: false, msg: error });
  }
};

// Create task
export const createTask = async (req, res) => {
  const taskData = req.body;
  // console.log(taskData); // { username: "Skillsafari", completed: true }
  const newTasksData = new Tasks(taskData); // { id:..., username:..., completed:.... _v: 0 }
  try {
    await newTasksData.save();
    res.status(201).json({
      success: true,
      data: newTasksData, // optional
      msg: "Tasks created successfully",
    });
  } catch (error) {
    res.status(400).json({ success: false, msg: error });
  }
};

// Update task
export const updateTask = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const updatedTask = await Tasks.findByIdAndUpdate(
      id,
      { ...updateData, id },
      { new: true }
    );
    res.status(201).json({
      success: true,
      data: updatedTask,
      msg: "Task updated successfully",
    });
  } catch (error) {
    res.status(400).json({ success: false, msg: error });
  }
};

// Delete task
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTask = await Tasks.findByIdAndRemove(id);
    res.status(200).json({
      success: true,
      data: deletedTask,
      msg: `Task with id: ${id} deleted successfully`,
    });
  } catch (error) {
    res.status(400).json({ success: false, msg: error });
  }
};
