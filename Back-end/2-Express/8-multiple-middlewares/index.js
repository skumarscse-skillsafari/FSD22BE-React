import express from "express";
import { middlewareOne } from "./middlewares/middlewareOne.js";
import { middlewareTwo } from "./middlewares/middlewareTwo.js";
import { middlewareThree } from "./middlewares/middlewareThree.js";
const app = express();

// app.use()
app.use([middlewareOne, middlewareTwo]);

app.get("/", (req, res) => {
  res.status(200).send("<h1>Multiple Middlewares</h1>");
});

app.get("/about", middlewareThree, (req, res) => {
  res.status(200).send("<h1>This is About Page</h2>");
});

app.listen(5000, () => {
  console.log("Server is running in: http://localhost:5000");
});
