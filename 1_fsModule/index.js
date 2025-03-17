// write file

const fs = require('fs');
fs.writeFile("example.txt","Hii! This file is written using fs module in node.js",(err)=>{
    if(err){
        console.log("Unable to write",err);
        return;       
    }
    console.log("File has been write successfully");
    
});

//read file

fs.readFile("example.txt","utf-8",(err,data)=>{
    if(err){
        console.log("unable to read data from the file",err);
        return;
    }
    console.log("Data is as follows: ",data);
    
})

//write file synchronously (Blocking)

fs.writeFileSync("exampleSync.txt","Hii! This data is written using the synchronous method of fs");
console.log('Synchronous file written successfully');

//read file synchronously (blocking) 
const data = fs.readFileSync("exampleSync.txt","utf-8");
console.log("Synchronous Data: ",data); //this will executed first before async one
console.log("Type of Synchronous data: " , typeof(data));


