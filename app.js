const express = require("express");
const path = require("path");

//servidor 
const app = express();

// rutas 

const inicioRouter = require("./src/routes/inicioRouter")


// middlewares 
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static('public'));
app.use(express.json()); // capturar body 

//usos 
app.use("/", inicioRouter)

// puerto del servidor 

app.listen(3024, () => console.log('Server is running in http://localhost:3024'));

