const express = require("express");
const app = express();

// Routes
/*
app.httpMethod("route", (req, res) => {
    // logic
    // Node
    res.writeHead(statusCode, {"Content-Type" : "text/html"})
    res.write(resContent);
    res.end();

    // Express
    res.status(statusCode).send(resContent)
})

*/

app.get("/", (req, res) => {
  res.status(200).send("<h1>Response from Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.status(200).send("Response from About Page");
});

app.get("/projects", (req, res) => {
  res.status(200).send("<h1>Response from Projects Page</h1>");
});

app.get("/contact", (req, res) => {
  res.status(200).send("<h1>Response from Contact Page</h1>");
});

app.all("*", (req, res) => {
  res.status(404).send(`
    <h1>Page Not Found</h1>
    <a href="/">Go to Home Page</a>
    `);
});

// http-methods
// app.get() => request something from the server. File, image, data
// app.post() => Send something to the server. File, image, data
// app.put() => Update the something in the server
// app.delete() => Delete the something in the server
// app.all()

// middlewares
// app.use()

// app.listen()

// statusCodes
// 200 => Sucess
// 201 => Created
// 404 => Page not found
// 400 => Server error

app.listen(5000, () => {
  console.log("Server is running in: http://localhost:5000");
});
