const fs = require('fs');

// const data = "The NodeJS runs event-driven operations, where each task is triggered by the use of events which deploys a callback function. The NodeJS runtime is an asynchronous operation and doesn't block other tasks while enabling a smooth operation.";

// fs.writeFileSync("nodejs_architecture.txt", data);

// Q3

// const readData = fs.readFileSync("nodejs_architecture.txt");

// console.log(readData.toString());

// Q4

const newData = "Node.js is an extremely powerful JavaScript-based platform that’s built on Google Chrome's JavaScript V8 Engine, used to develop I/O intensive web applications like video streaming sites, single-page applications, online chat applications, and other web apps. Node.js is used by large, established companies and newly-minted startups alike. Open-source and completely free, the platform is used by thousands of developers around the world. It brings plenty of advantages to the table, making it a better choice than other server-side platforms like Java or PHP in many cases.";

fs.appendFileSync("nodejs_architecture.txt", newData);

const newDataOutput = fs.readFileSync("nodejs_architecture.txt");

console.log(newDataOutput.toString());


/*
output:
PS E:\Built-inModulesNodejsAssignment> node index.js
The NodeJS runs event-driven operations, where each task is triggered by the use of events which deploys a callback
 function. The NodeJS runtime is an asynchronous operation and doesn't block other tasks while enabling a smooth
 operation.Node.js is an extremely powerful JavaScript-based platform that’s built on Google Chrome's JavaScript
 V8 Engine, used to develop I/O intensive web applications like video streaming sites, single-page applications,
 online chat applications, and other web apps. Node.js is used by large, established companies and newly-minted
 startups alike. Open-source and completely free, the platform is used by thousands of developers around the world.
 It brings plenty of advantages to the table, making it a better choice than other server-side platforms like Java
 or PHP in many cases.Node.js is an extremely powerful JavaScript-based platform that’s built on Google Chrome's JavaScript V8 Engine, used to develop I/O intensive web applications like video streaming sites, single-page applications, online chat applications, and other web apps. Node.js is used by large, established companies and newly-minted startups alike. Open-source and completely free, the platform is used 
by thousands of developers around the world. It brings plenty of advantages to the table, making it a better choice than other server-side 
platforms like Java or PHP in many cases.Node.js is an extremely powerful JavaScript-based platform that’s built on Google Chrome's JavaScript V8 Engine, used to develop I/O intensive web applications like video streaming sites, single-page applications, online chat applications, and other web apps. Node.js is used by large, established companies and newly-minted startups alike. Open-source and completely free, the platform is used by thousands of developers around the world. It brings plenty of advantages to the table, making it a better choice than other server-side platforms like Java or PHP in many cases.
*/
