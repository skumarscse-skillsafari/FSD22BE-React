import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.status(200).send("<h1>About Page</h1>");
});

app.listen(5000, () => {
  console.log("Server is running in: http://localhost:5000");
});
