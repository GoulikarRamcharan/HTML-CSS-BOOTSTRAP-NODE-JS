var express = require('express');

var app = express();

var cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var employees = [];

app.use(cors(

))

app.get('/',function(req,resp){

    resp.sendFile("Employee.html" , {root : __dirname});
})

app.post('/save',function(req,resp){

    var emid = req.body.empid;

    var emnm = req.body.empname;

    var emdep = req.body.empdept;


   employees.push({empid : emid , empname : emnm , empdept : emdep});

//    resp.send("<h1>Data Saved Successfully</h1>");
 resp.json({ message: "Data Saved Successfully" });

})

app.get('/Showallemployees',function(req,resp){

    resp.json(employees);
})


app.listen('3000',()=>{
    console.log("server running at http://localhost:3000");
})


/* fetch("http://localhost:3000/save" , {
            method: "POST",
            headers : {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(empdata)
        })
        .then(res => res.json())
        .then((msg) => {console.log("server recieved" ,msg)})
        .catch((err) => {console.log("error", err)})*/
