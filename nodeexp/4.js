var express = require("express");

var app = express();


app.use(express.urlencoded({ extended : true}));

 var usrarr = [{
     uname : "RamCharan",
     pass : "pass"
 },
 {
        uname : "Raj",
        pass : "raj123"
 },
 {
    uname : "Vinay",
    pass : "vinay123"
 }
];
app.get("/" , function(req,resp){

    resp.sendFile("log.html", {root : __dirname});
});

app.post("/",function(req,resp){

    var usr = req.body.Username;

    var pas = req.body.Password;

    var exist = false;

    for( var i = 0; i < usrarr.length;i++){

        if( usrarr[i].uname == usr && usrarr[i].pass == pas){
            exist = true;
            
        }

    }
    if(exist){
        resp.send(`<h1>Welcome Back! Successfully Logged IN</h1>`);
    }
        else{

            resp.send(`<h1>User Not Found!!!</h1>`);
        }
    
    console.log(usrarr);
});

app.listen(3000, ()=>{
    console.log("Server Listening at http://localhost:3000");
})