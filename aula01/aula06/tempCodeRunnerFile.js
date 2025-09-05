// 1. importar o framework
const express = require("express");

// 2. criar uma instância do aplicativo
const app = express();

// 3. iniciar a aplicação em uma porta
app.listen(3000, ()=>{
    console.log("App está On!");
})