import express from "express";
import {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} from "../Controllers/UserControllers/userControllers.js";

const router = express.Router();
// Getting all the users
router.get("/users", getUsers);

// Getting single user
router.get("/user/:id", getSingleUser);

// Create a user
router.post("/user/add", createUser);

// Update User
router.put("/user/update/:id", updateUser);

// Delete User
router.delete("/user/delete/:id", deleteUser);

export default router;
