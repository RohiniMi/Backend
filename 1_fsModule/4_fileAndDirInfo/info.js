const fs = require("fs");
fs.stat("../example-async.txt",(err,stats)=>{
    if(err){
        throw err;
    }
    console.log(stats.isFile());    
})
fs.stat("../2_readAndWriteDir/folder-async",(err,stats)=>{
    if(err){
        throw err;
    }
    console.log(stats.isDirectory());   
    console.log(stats.mtime);
    
})