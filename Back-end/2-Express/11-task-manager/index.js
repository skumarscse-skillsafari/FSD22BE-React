import express from "express";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes.js";
dotenv.config();

const app = express();
// send data as form-data
app.use(express.urlencoded({ extended: false }));
// send the data as json
app.use(express.json());

const PORT = process.env.PORT;

app.use("/api/v1/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.status(200).send("<h2>Task Manager</h2>");
});

app.listen(PORT, () => {
  console.log(`Server is running in: http://localhost:${PORT}`);
});
