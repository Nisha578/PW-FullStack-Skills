const fs = require('fs');

fs.unlink("./nodejs_architecture.txt", () => {
    console.log("File Deleted Successfully");
})


Output:

/*
PS E:\Built-inModulesNodejsAssignment> node index.js
File Deleted Successfully
*/
