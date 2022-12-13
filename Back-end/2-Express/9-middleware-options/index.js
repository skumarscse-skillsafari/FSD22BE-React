import express from "express";
import { loginMiddleware } from "./middlewares/loginMiddleware.js";
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<h1>Middleware Options</h1>");
});

app.get("/login", loginMiddleware, (req, res) => {
  const { username } = req; // { "username" : "SkillSafari" }
  res.status(200).send(`<h1>Welcome, ${username}</h2>`);
});

app.listen(5000, () => {
  console.log("Server is running in: http://localhost:5000");
});
