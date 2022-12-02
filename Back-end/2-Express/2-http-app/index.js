const http = require("http");
const { readFileSync } = require("fs");

const htmlPage = readFileSync("./Products-website/index.html");
const styleSheet = readFileSync("./Products-website/style.css");
const scriptFile = readFileSync("./Products-website/script.js");
const bgImage = readFileSync("./Products-website/images/bg.jpg");
const productOne = readFileSync("./Products-website/images/product-1.jpg");
const productTwo = readFileSync("./Products-website/images/product-2.jpg");
const productThree = readFileSync("./Products-website/images/product-3.jpg");
const productFour = readFileSync("./Products-website/images/product-4.jpg");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(htmlPage);
    res.end();
  } else if (url === "/style.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(styleSheet);
    res.end();
  } else if (url === "/script.js") {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.write(scriptFile);
    res.end();
  } else if (url === "/images/bg.jpg") {
    res.writeHead(200, { "Content-Type": "image/jpg" });
    res.write(bgImage);
    res.end();
  } else if (url === "/images/product-1.jpg") {
    res.writeHead(200, { "Content-Type": "image/jpg" });
    res.write(productOne);
    res.end();
  } else if (url === "/images/product-2.jpg") {
    res.writeHead(200, { "Content-Type": "image/jpg" });
    res.write(productTwo);
    res.end();
  } else if (url === "/images/product-3.jpg") {
    res.writeHead(200, { "Content-Type": "image/jpg" });
    res.write(productThree);
    res.end();
  } else if (url === "/images/product-4.jpg") {
    res.writeHead(200, { "Content-Type": "image/jpg" });
    res.write(productFour);
    res.end();
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Page not found.</h2>");
    res.end();
  }
});

server.listen(5000, () => {
  console.log("Server is running in: http://localhost:5000");
});
