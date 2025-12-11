var express = require("express");

var app = express();

var cors = require("cors");

app.use(cors(


))

var weatherData = [
  { day: "Friday",date: "March 21 2:00 PM" ,icon : "bi bi-cloud",type: "cloudy", temp: 35 },
  { day: "Saturday",date: "March 22 2:00 PM" ,icon : "bi bi-cloud-drizzle-fill", type: "rainy", temp: 36 },
  { day: "Sunday",date: "March 23 2:00 PM" ,icon : "bi bi-cloud", type: "cloudy", temp: 36 },
  { day: "Monday",date: "March 24 2:00 PM" , icon : "bi bi-sun-fill",type: "sunny", temp: 34 },
  { day: "Tuesday",date: "March 25 2:00 PM" ,icon : "bi bi-cloud", type: "cloudy", temp: 26 }
];


app.get('/weather',function (req,resp){

    resp.json(weatherData);
})
app.listen('3000',() =>{

    console.log("server Runnig ");
})




/*const mongoose  = require('mongoose');

mongoose.connect('mongodb://localhost:27017').then(() => {console.log("Database connected")}).catch((err) => {console.log("error ",err)});
 
const weatherSchema =  mongoose.Schema({
   day : String,
   date : String,
   icon: String,
   type:String,
   temp:Number

})

const Weather = mongoose.model('Weather', weatherSchema);



var weatherData = [
  { day: "Friday",date: "March 21 2:00 PM" ,icon : "bi bi-cloud",type: "cloudy", temp: 35 },
  { day: "Saturday",date: "March 22 2:00 PM" ,icon : "bi bi-cloud-drizzle-fill", type: "rainy", temp: 36 },
  { day: "Sunday",date: "March 23 2:00 PM" ,icon : "bi bi-cloud", type: "cloudy", temp: 36 },
  { day: "Monday",date: "March 24 2:00 PM" , icon : "bi bi-sun-fill",type: "sunny", temp: 34 },
  { day: "Tuesday",date: "March 25 2:00 PM" ,icon : "bi bi-cloud", type: "cloudy", temp: 26 }
];

// 
async function addData () {
//     await Weather.insertMany(weatherData);
// }
// addData().then(() => {console.log("Data pushed")}).catch((err) => {console.log("data not pushed",err)});

app.get('/weather' , async function(req,resp){
  
    const data =  await Weather.find();
    console.log(data);
    resp.json(data);
   
} )
*/