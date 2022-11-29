// Creating own modules

const moduleOne = require("./1-module.js");
const moduleTwo = require("./2-module.js");
const moduleThree = require("./3-module.js");
const sendMessage = require("./4-module.js");
require("./5-module.js");
console.log(moduleOne.subject); // Node
console.log(moduleTwo.user.firstName); // SkillSafari
console.log(moduleThree.hobbies[1]); // Football

sendMessage.sendMessage("Good Night"); // The message is: Good Night
