const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req);
  //   console.log(res);
  if (req.url === "/") {
    res.end(`<h1>I am Response for the request http://localhost:5000</h1>`);
  }
});

server.listen(5000, () =>
  console.log("Server is running in: http://localhost:5000")
);
