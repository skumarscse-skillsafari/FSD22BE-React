// OS => one of the core module of Node.js
// https://nodejs.org/dist/latest-v18.x/docs/api/

// imported own modules
// const varName = require("path_of_module_with_extension")

// import core modules of Node.js
// const varName = require('module_name')
const os = require("os");

// console.log(os);
// Get the userInfo of the system
const user = os.userInfo();
console.log(user);
console.log(user.username);

// Getting uptime of the system
console.log(`The uptime of this system is: ${os.uptime()} seconds`);

const osInfo = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(osInfo);
