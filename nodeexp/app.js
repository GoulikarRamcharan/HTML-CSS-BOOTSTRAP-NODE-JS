var express = require("express");

var app = express();

var router = require("./route.js");

app.use('/',router);


app.listen(3000,()=>{

    console.log("Server Listening At http://localhost:3000");
});