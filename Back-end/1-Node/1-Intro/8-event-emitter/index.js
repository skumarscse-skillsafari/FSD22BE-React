const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// Creating Event
// on("eventType", "listener function")
customEmitter.on("response", function (firstName, lastName) {
  console.log(`The received data: ${firstName}, ${lastName}`);
});

customEmitter.on("response", (id) => {
  console.log(`The received data: ${id}`);
});

customEmitter.on("response", () => {
  console.log("Event Emitter function without data");
});

customEmitter.on("display", (message) => {
  console.log(`The received message is: ${message}`);
});
// Calling the Event
// emit("eventName", "value")
customEmitter.emit("response", "SkillSafari", "EduKeys");
// customEmitter.emit("response", 25);
// customEmitter.emit("response");
customEmitter.emit("display", "Hello...");
