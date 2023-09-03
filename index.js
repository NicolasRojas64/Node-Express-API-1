const express = require('express');
const app = express();


//Middleware, manejador de peticiones
// function logger(req,res,next){
//     console.log(`Request received: ${req.protocol}// ${req.get('host')}`);
//     next();
// }
//app.use(logger)

//Middleware con módulo morgan
const morgan = require('morgan');
app.use(morgan('dev'));

//Settings
app.set("appName", "Express 1");
app.set("port", 5000)
app.set("view engine", 'ejs')

app.use(express.json())

//Routes
app.all("/user", (req,res,next)=>{
    console.log("Usarios");
    next();
})

app.get("/", (req, res)=>{
    const users = [{'name':'Albert'}, {'name':'Pedro'}, {'name':'Fiona'}]
    //Manejador de plantillas EJS 
    res.render('index.ejs', {people: users})
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

//Middleware static
app.use(express.static('public'))

app.listen(app.get('port'), () => {
    console.log(app.get('appName'))
    console.log(`Server up on port ${app.get('port')}!!!`);
})

