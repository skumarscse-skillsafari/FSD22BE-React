const { createReadStream } = require("fs");

// Break the large file in to chunk of smaller files
// Each and every chunk will be send to the server to client one by one
// chunk can also be called as "buffer"

// default => 64kb
// last buffer - remainder
// highWaterMark - define the size of the buffer

// const stream = createReadStream("./content.txt");

// const stream = createReadStream("./content.txt", {encoding: "utf-8"});

const stream = createReadStream("./content.txt", { highWaterMark: 30000 });

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => console.log(err));
