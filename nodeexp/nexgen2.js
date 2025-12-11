var express = require("express");

var app = express();

var prodarr = [
    {
        pid : 1001,
        prodname : "Gaming headset",
        price : 3000,
        category : "Headset"
    },
    {
         pid: 1002,
         prodname: "Mechanical Keyboard", 
         price: 2500,
          category: "Keyboard" },
{ 
    pid: 1003,
     prodname: "Wireless Mouse",
      price: 800,
       category: "Mouse" 
    },
{ 
    pid: 1004, 
    prodname: "27-inch Monitor", 
    price: 12000, 
    category: "Monitor"
 },
{ 
    pid: 1005,
     prodname: "USB Webcam",
      price: 1800,
       category: "Camera"
     },
{ 
    pid: 1006,
     prodname: "Studio Microphone", 
     price: 5000, 
     category: "Audio"
     }
]

var disp = "<table border ='1'><tr><th>Product Id</th><th>Product Name</th><th>Product Price</th><th>Product Category</th></tr>";


for(var i = 0 ; i < prodarr.length ; i++){

    disp += `<tr><td>${prodarr[i].pid}</td><td>${prodarr[i].prodname}</td><td>${prodarr[i].price}</td><td>${prodarr[i].category}</td></tr>`
}

    disp += "</table>";

app.get("/",(req,resp)=>{
    resp.send(disp);
})
app.listen(3000,()=>{
    console.log("server Listening at http://localhost:3000");
})    