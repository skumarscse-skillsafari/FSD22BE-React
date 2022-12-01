const { writeFileSync } = require("fs");

for (let i = 0; i <= 10000; i++) {
  writeFileSync("./content.txt", `The content in line: ${i} is => ${i}\n`, {
    flag: "a",
  });
}
