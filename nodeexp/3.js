var express = require("express");

var app = express();


app.use(express.urlencoded({ extended : true}));

 var usrarr = [];
app.get("/" , function(req,resp){

    resp.sendFile("login.html", {root : __dirname});
});

app.post("/",function(req,resp){

    var usr = req.body.Username;

    var pas = req.body.Password;

    var exist = false;

    for( var i = 0; i < usrarr.length;i++){

        if( usrarr[i].uname == usr){
            exist = true;
            
        }
    }
    if(exist){
        resp.send("Already User Exist");
    }
        else{
            usrarr.push({uname : usr,pass : pas});
            resp.send(`<h1>Welcome Successflly Logged IN</h1>`);
            
        }
    
    console.log(usrarr);
});

app.get('/user',function(req,resp){
    resp.json(usrarr);
})
app.listen(3000, ()=>{
    console.log("Server Listening at http://localhost:3000");
})