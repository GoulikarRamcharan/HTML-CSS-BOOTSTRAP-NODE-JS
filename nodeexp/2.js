var express = require("express");

var app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/",function(req,resp){

    resp.sendFile("second.html", {root : __dirname});

})

app.post("/",function(req,resp){

    var pr = req.body.amt;

    var yr = req.body.year;

    var r = req.body.rate;

    var si = (pr * yr * r) / 100;

    resp.send(`<h1>The SI is</h1>
                <p>${si}</p>`)
})

app.listen(3000,() =>{
    console.log("server running at http://localhost:3000");
})