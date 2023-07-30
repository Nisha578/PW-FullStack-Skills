const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

const subscribeMessage = (channelName) => {
    console.log(`Thanks For Subscribing to ${channelName}`);
};

eventEmitter.addListener("subscribe", subscribeMessage);

eventEmitter.emit("subscribe", "College Wallah");

//  output:
// PS E:\Built-inModulesNodejsAssignment> node Q8.js
// Thanks For Subscribing to College Wallah
