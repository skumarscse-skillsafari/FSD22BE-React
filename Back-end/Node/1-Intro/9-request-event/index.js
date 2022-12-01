const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  res.end("<h1>Hello...</h1>");
});

server.listen(5000, () => {
  console.log("The server is running in: http://localhost:5000");
});
