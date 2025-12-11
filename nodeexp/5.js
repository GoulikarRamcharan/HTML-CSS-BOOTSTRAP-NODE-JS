var express = require("express");

var app = express();


app.use(express.urlencoded({ extended : true}));

var studs = [
{ sid: 101, sname: "Savita", course: "DIoT" },
{ sid: 102, sname: "Kavita", course: "DAC" },
{ sid: 103, sname: "Anita", course: "DESD" },
{ sid: 104, sname: "Sunita", course: "DIoT" },
{ sid: 105, sname: "Babita", course: "DMC" },
];

app.get("/",function(req,resp){

    resp.sendFile("student.html", {root : __dirname});
});

app.get("/list", function(req,resp){
        let  html = `<h1> List Of Student</h1>`
        for(let std of studs){
            html += `<p>${std.sid} - ${std.sname} - ${std.course}</p>`
          console.log(std);
        }

        html += `<br><br>`
        html += `<a href = "/">Want to search Student </a>`
        
        resp.send(html);

});

app.post("/res",function(req,resp){

    let disp = `<h1>Search Student Detail is</h1>`;
    var srh = null;
    var stnam = req.body.sname;
    for(var std of studs){
        if(std.sname == stnam){
            srh = std;
        }
        

    }
    if(srh){
        resp.send(`<h1>Student Details</h1>
            Student Id: ${srh.sid}<br>
            Student name: ${srh.sname}<br>
            Student Course : ${srh.course}<br>
            
            <a href="/list">Want to Check List </a>`)
        
    }
    else{
        resp.send(`<h1>Not Found!!!!</h1>
            <a href = "/res">Want to search again Student </a>
            `);
        
    }
    
});

app.listen(3000, ()=>{
    console.log("Serever Running at http://localhost:3000");
});

