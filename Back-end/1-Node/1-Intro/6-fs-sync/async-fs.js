const { readFile, writeFile } = require("fs");

console.log("Start...");

readFile("./1-content.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  const firstFile = res;
  readFile("./2-content.txt", "utf-8", (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    const secondFile = res;
    writeFile(
      "./4-write-content-async.txt",
      `The content in fileOne: ${firstFile} \nThe content in fileTwo: ${secondFile}`,
      (err, res) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("File written successfully...");
      }
    );
  });
});

console.log("End...");
