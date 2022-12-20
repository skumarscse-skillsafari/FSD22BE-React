import mongoose from "mongoose";

const tasksSchema = mongoose.Schema({
  username: String,
  completed: Boolean,
});

const Tasks = mongoose.model("Tasks", tasksSchema);

export default Tasks;
