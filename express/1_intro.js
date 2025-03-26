import express from "express";

const app = express();
const port = 4000;

app.get("/",(req,res)=>{
   res.send("Hii! This is the local server")
})
app.get("/about",(req,res)=>{
    res.send("Hii! This is the about page");
})
app.get('/user', (req, res) => {
    const name = req.query.name; // Access query parameter
    res.send(`Hello, ${name}`);
});
// http://localhost:4000/user?name=Rohini

app.get("/api", (req, res) => {
    try {
      const { name, rollno } = req.query;
      if (!name) {
        // res.send({ status: 404, message: "Please enter a name" });
        res.status(404).send("Please enter a name");
      }
      else {
        res.send(`Welcome ${name} and your roll.no. is ${rollno}`);
      }
    } catch (error) {
      console.log(error.message)
    }
  });
app.get('/user/:id', (req, res) => {
    const userId = req.params.id; // Access route parameter
    res.send(`User ID: ${userId}`);
});

app.listen(port,()=>{
    console.log(`Server is running at https://localhost:${port}`);
    
})
