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
       category: "Toys" 
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
       category: "Toys"
     },
{ 
    pid: 1006,
     prodname: "Studio Microphone", 
     price: 5000, 
     category: "Audio"
     },
     {
      pid: 1007,
     prodname: "Rc Car", 
     price: 4500, 
     category: "Toys"
     }
]

var segrate = [];
for(var i = 0; i < prodarr.length;i++){
    segrate = prodarr.filter(ele => ele.category == 'Toys');
}
  console.log(segrate);

app.get("/",(req,resp)=>{
    resp.send(segrate);
  
})

app.listen(3000,()=>{
    console.log("running");
})
