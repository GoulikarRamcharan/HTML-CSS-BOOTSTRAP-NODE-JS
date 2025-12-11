var express = require("express");

var app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/",function(req,resp){

    resp.sendFile("first.html", {root : __dirname});

})

app.post("/",function(req,resp){

    var usr = req.body.firststring;

    var ssr = req.body.secondstring;

    var tsr = req.body.thirdstring;


    resp.send(`<h1>The Parameters are </h1>
       <p> . ${usr}</p>
       <p> . ${ssr}</p>
       <p> . ${tsr}</p>
             `)
})

app.listen(3000,()=>{
    console.log("Server Running at http://localhost:3000");
} )