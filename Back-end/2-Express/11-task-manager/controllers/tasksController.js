// Get all the tasks
export const getAllTasks = (req, res) => {
  res.status(200).send("<h2>Get all the tasks</h2>");
};

// Get single task
export const getSingleTask = (req, res) => {
  res.status(200).send("<h2>Get single task</h2>");
};

// Create task
export const createTask = (req, res) => {
  res.status(201).send("<h2>Create task</h2>");
};

// Update task
export const updateTask = (req, res) => {
  res.status(200).send("<h2>Update task</h2>");
};

// Delete task
export const deleteTask = (req, res) => {
  res.status(200).send("<h2>Delete task</h2>");
};
