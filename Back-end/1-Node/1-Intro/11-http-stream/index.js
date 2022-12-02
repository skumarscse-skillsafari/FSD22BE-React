const { readFileSync, createReadStream } = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  //   const fileContent = readFileSync("./1-content.txt", "utf-8");
  //   res.end(`The content in 1-content.txt is: ${fileContent}`);

  const fileStream = createReadStream("./content.txt", { encoding: "utf-8" });
  fileStream.on("open", () => {
    fileStream.pipe(res);
  });
  fileStream.on("error", (err) => console.log(err));
});

server.listen(5000, () => {
  console.log("Server is running in: http://localhost:5000");
});
