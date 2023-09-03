const express = require('express');
const app = express();

app.use(express.json())

//Middleware, manejador de peticiones
function logger(req,res,next){
    
}

app.all("/user", (req,res,next)=>{
    console.log("Usarios");
    next();
})

app.get("/", (req, res) => {
    res.send("<h1>Puerto 5000<h1/>");
})

app.get("/user", (req,res) =>{
    res.json({
        "name":"nick",
        "lastName":"Rojas"
    })
})

app.post("/user/:id", (req,res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send(`Usuario ${req.params.id} agregado`);
})

app.delete( '/delete', (req, res) => {
    res.send("DELETE METHOD")
})

app.listen(5000, () => {
    console.log("Server up on port 5000!!!");
})

