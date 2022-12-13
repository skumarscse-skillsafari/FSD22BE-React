import express from "express";
import { users } from "./data.js";
const app = express();

app.use(express.static("./public"));

// send data as form
app.use(express.urlencoded({ extended: false }));

// send data as json
app.use(express.json());

// Getting all the users
app.get("/api/v1/users", (req, res) => {
  res.status(200).json({ success: true, data: users });
});

// Getting single user
app.get("/api/v1/user/:id", (req, res) => {
  const { id } = req.params; // { id: 1 }
  const singleUser = users.find((user) => user.id === Number(id));
  if (singleUser) {
    res.status(200).json({ success: true, data: singleUser });
  }
  res.status(404).json({ success: false, data: "No data found." });
});

// Create a user
app.post("/api/v1/users/add", (req, res) => {
  console.log(res);
});

app.listen(5000, () => {
  console.log("Server is running in: http://localhost:5000");
});
