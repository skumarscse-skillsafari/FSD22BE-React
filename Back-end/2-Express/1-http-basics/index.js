const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>This is Home Page.</h1>");
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>This is About Page.</h2>");
    res.end();
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>This is Contact Page.</h2>");
    res.end();
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
        <h2>Page not found.</h2>
        <a href="/">Go back to home page.</a>
    `);
    res.end();
  }
});

server.listen(5000, () => {
  console.log("Server is running in : http://localhost:5000");
});
