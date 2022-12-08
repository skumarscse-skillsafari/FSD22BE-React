import express from "express";
const app = express();

// req <=> middleware <=> res
// middleware => function => req object, res object, next() function
const middlewareFun = (req, res, next) => {
  const { method, url } = req;
  console.log(`The http method is: ${method} and The request url is: ${url}`);
  next();
};

const middlewareAbout = (req, res, next) => {
  console.log("I am from middlewareAbout");
  next();
};

app.get("/", middlewareFun, (req, res) => {
  res.status(200).send("<h1>Middleware</h1>");
});

app.get("/about", middlewareAbout, (req, res) => {
  res.status(200).send("<h1>This is About Page</h1>");
});

app.listen(5000, () => {
  console.log("Server is running in: http://localhost:5000");
});
