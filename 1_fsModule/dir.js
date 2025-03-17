const fs = require("fs");

fs.mkdir("folder", (error) => {
    if (error) {
        console.log("Unavle to create a directory.", error);
        return;
    }
    console.log("Folder-async has been created successfully");

})
fs.mkdirSync("folder-sync");
console.log("Sync folder has been created successfully.");


// read folder

fs.readdir("folder", "utf-8", (error, data) => {
    if (error) {
        console.log("Unable to read from folder.", error);

        return;

    }
    console.log("Successful read-async from folder: ", data);
})

const dataSync = fs.readdirSync("folder-sync", "utf-8");
console.log("Successfull read-sync from file.", dataSync);

// delete dir asynchronously

// fs.rmdir("folder", (error) => {
//     if (error) {
//         console.log("Unable to delete the folder.", error);
//         return;

//     }
//     console.log("Folder-async has been deleted successfully.");
// })

//delete folder synchronously (Error Handling)
// try{
//     fs.rmdirSync("folder-sync");
//     console.log("Folder-sync has been deleted successfully");  
// }
// catch{
//     console.log("Unable to delete folder-sync synchronously.");   
// }

//rename
fs.rename("folder","folder-async",(error)=>{
    if(error){
        console.log("unable to rename",error);
        return;
    }
    console.log("File has been renamed successfully.");
})