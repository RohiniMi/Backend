
// const path = require("path");
console.log(__dirname);
console.log(__filename);

//create a absolute path for another file
const path = require("path");
const newPath = path.join(__dirname , "data.txt");
console.log("Path is: ",newPath);
