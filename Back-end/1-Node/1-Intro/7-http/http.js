const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req);
  //   console.log(res);
  // if (req.url === "/") {
  //   res.end(`<h1>I am Response for the request http://localhost:5000</h1>`);
  // } else if (req.url === "/about") {
  //   res.end("<h1>I am from about page</h1>");
  // } else if (req.url === "/project") {
  //   res.end("I am from Projects page");
  // } else if (req.url === "/contact") {
  //   res.end("I am from contact page");
  // } else {
  //   res.end(`
  //     <p>Page not found</p>
  //     <a href="/">Back to home page</a>
  //   `);
  // }

  switch (req.url) {
    case "/":
      res.end(`<h1>I am Response for the request http://localhost:5000</h1>`);
      break;
    case "/about":
      res.end("<h1>I am from about page</h1>");
      break;
    case "/projects":
      res.end("<h1>I am from projects page</h1>");
      break;
    case "/contact":
      res.end("<h1>I am from contact page</h1>");
      break;
    default:
      res.end(`
      <p>Page not found</p>
      <a href="/">Back to home page</a>
    `);
      break;
  }
});

server.listen(5000, () =>
  console.log("Server is running in: http://localhost:5000")
);
