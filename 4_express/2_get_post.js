import express from "express";
import { users } from "./users.js"
const app = express();
const port = 4000;

app.get("/users", (req, res) => {
    res.send(users);
})

app.use(express.json());
// app.post("/users", (req, res) => {
//     const data = req.body;
//     // console.log(data.name);
//     res.send(`Data fetched successfully. ${data.name}`);
// })
app.post('/users', (req, res) => {
    const newid = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    const { name, age } = req.body;
    users.push({ id: newid, name, age });
    console.log(users);
    res.send("New User is created successfully!");
})

app.patch('/api/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const index = users.findIndex(user => user.id == id);
    users[index].name = name;
    res.send("user is updated successfully!");
})
app.delete('/api/:id', (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(user => user.id == id);
    users.splice(index, 1)
    res.send("user is deleted successfully!");
})
app.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`);

})
