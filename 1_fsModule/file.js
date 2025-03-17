// write file

const { error } = require('console');
const fs = require('fs');
fs.writeFile("example.txt", "Hii! This file is written using fs module in node.js", (err) => {
    if (err) {
        console.log("Unable to write", err);
        return;
    }
    console.log("File has been write successfully");

});

//read file
const read = () => {
    fs.readFile("example.txt", "utf-8", (err, data) => {
        if (err) {
            console.log("unable to read data from the file", err);
            return;
        }
        console.log("Data is as follows: ", data);

    })
}
read();

//write file synchronously (Blocking)

fs.writeFileSync("exampleSync.txt", "Hii! This data is written using the synchronous method of fs");
console.log('Synchronous file written successfully');

//read file synchronously (blocking) 
const readSync = () => {

    const data = fs.readFileSync("exampleSync.txt", "utf-8");
    console.log("Synchronous Data: ", data); //this will executed first before async one
    console.log("Type of Synchronous data: ", typeof (data));
}
readSync();


// append data asynchronously (Non-blocking)
fs.appendFile("example.txt", "\n Appended content", (error) => {
    if (error) {
        console.log("Unable to append data", error);
        return;
    }
    console.log("Data is appended successfully.");
})
//read data
read();

//append data synchronously (blocking)
fs.appendFileSync("exampleSync.txt", "\nAppended data using sync method");
readSync();

//delete a file (asynchronously)

// fs.unlink("example.txt",(error)=>{
//     if(error){
//         console.log("Error in deleting file: ",error);
//         return;
//     }
//     console.log("File has been deleted successfully.");
    
// })

//delete a file synchronously

// fs.unlinkSync("exampleSync.txt");
// console.log("File has been deleted successfully synchronously");

