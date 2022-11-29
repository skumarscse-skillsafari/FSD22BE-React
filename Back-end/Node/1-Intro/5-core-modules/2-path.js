const path = require("path");

// console.log(path);

console.log(path.sep);

const filePath = path.join("/node/", "modules", "demo.txt");
console.log(filePath);

const baseFile = path.basename(filePath);
console.log(baseFile);

const absolute = path.resolve(__dirname, "/node/", "module", "demo.txt");
console.log(absolute);
