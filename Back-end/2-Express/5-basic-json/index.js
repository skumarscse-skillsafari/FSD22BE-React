import express from "express";
import { products } from "./products.js";
const app = express();

app.get("/", (req, res) => {
  //   res.status(200).send("<h1>Welcome...</h1>");
  res.status(200).json(products);
});

app.all("*", (req, res) => {
  res.status(404).send(`
        <h1>Page not found.</h1>
        <a href="/">Back to Home.</a>
    `);
});

app.listen(5000, () => {
  console.log("Server is running in: http://localhost:5000");
});
