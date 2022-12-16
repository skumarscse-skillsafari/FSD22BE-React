// Functions
import { v4 as uuidv4 } from "uuid";
import { users } from "../../data.js";
// Get Users
export const getUsers = (req, res) => {
  res.status(200).json({ success: true, data: users });
};

// Get Single user
export const getSingleUser = (req, res) => {
  const { id } = req.params; // { id: 1 }
  const singleUser = users.find((user) => user.id === Number(id));
  if (singleUser) {
    return res.status(200).json({ success: true, data: singleUser });
  }
  res.status(404).json({ success: false, data: "No data found." });
};

// Create User
// Postman => workspace => collection(s) => requests
export const createUser = (req, res) => {
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
};

// Update User => findSingleUser and CreateNewUser
// find the user by id to be updated
// perform update operation on the found user
export const updateUser = (req, res) => {
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
};

// Delete User => findSingleUser and deleteUser
// Find the user using id
// Delete the user
export const deleteUser = (req, res) => {
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
};
