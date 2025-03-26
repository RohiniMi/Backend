import http from "http";
// import fs from "fs";

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.setHeader("Content-Type" , "text/plain");
        res.write("Hii! This is the plain text");
        res.end();
    }
    if(req.url === "/about"){
        res.setHeader("Content-Type" , "text/html");
        res.write(`<h1><b><i><u>Hii! This is the html text</u></i></b></h1>`);
        res.end();
    }
});
const PORT = 3079;

server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);    
});


