const fs = require('fs');

const data = "The NodeJS runs event-driven operations, where each task is triggered by the use of events which deploys a callback function. The NodeJS runtime is an asynchronous operation and doesn't block other tasks while enabling a smooth operation.";

fs.writeFileSync("nodejs_architecture.txt", data);