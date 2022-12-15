import express from "express";
import { v4 as uuidv4 } from "uuid";
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
    return res.status(200).json({ success: true, data: singleUser });
  }
  res.status(404).json({ success: false, data: "No data found." });
});

// Create a user
// Postman => workspace => collection(s) => requests
app.post("/api/v1/user/add", (req, res) => {
  // console.log(req.body);
  const { username } = req.body;
  if (username) {
    return res.status(201).json({
      success: true,
      data: { id: uuidv4(), username },
      msg: "User created successfuly",
    });
  }
  res.status(401).json({ success: false, msg: "Enter username" });
});

// Update User => findSingleUser and CreateNewUser
// find the user by id to be updated
// perform update operation on the found user
app.put("/api/v1/user/update/:id", (req, res) => {
  const { id } = req.params;
  const { username } = req.body;

  const findUser = users.find((user) => user.id === Number(id));
  if (!findUser) {
    return res
      .status(404)
      .json({ success: false, msg: `No user with the id: ${id}` });
  }

  const newUser = users.map((user) => {
    if (user.id === Number(id)) {
      user.username = username;
    }
    return user;
  });
  res.status(200).json({ success: true, data: newUser });
});

// Delete User => findSingleUser and deleteUser
// Find the user using id
// Delete the user
app.delete("/api/v1/user/delete/:id", (req, res) => {
  const { id } = req.params;
  const findUser = users.find((user) => user.id === Number(id));
  if (!findUser) {
    return res
      .status(404)
      .json({ success: false, msg: `No user with the id: ${id}` });
  }

  const deleteUser = users.filter((user) => user.id !== Number(id));
  res.status(200).json({
    success: true,
    data: deleteUser,
    msg: "User deleted successfully",
  });
});

app.listen(5000, () => {
  console.log("Server is running in: http://localhost:5000");
});
