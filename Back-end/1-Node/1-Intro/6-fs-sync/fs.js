const { readFileSync, writeFileSync } = require("fs");

// console.log(fs);
// Read the file using "sync" method..
console.log("Reading the files...");
const fileOne = readFileSync("./1-content.txt", "utf-8");
const fileTwo = readFileSync("./2-content.txt", "utf-8");

console.log("Start writing the files...");
// Write the file content using "sync" method
writeFileSync(
  "./3-write-content.txt",
  `The contents of fileOne: ${fileOne}, \nThe contents of fileTwo: ${fileTwo}\n`,
  { flag: "a" }
);
console.log("Files Written Successfully...");
