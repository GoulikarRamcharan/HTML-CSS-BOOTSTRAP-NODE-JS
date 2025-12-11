var express = require("express");

var app = express();

var cors = require("cors");

var mongoose  = require("mongoose");
app.use(cors (

))

var weatherData = [
  { day: "Friday",date: "March 21 2:00 PM" ,icon : "bi bi-cloud",type: "cloudy", temp: 35 },
  { day: "Saturday",date: "March 22 2:00 PM" ,icon : "bi bi-cloud-drizzle-fill", type: "rainy", temp: 36 },
  { day: "Sunday",date: "March 23 2:00 PM" ,icon : "bi bi-cloud", type: "cloudy", temp: 36 },
  { day: "Monday",date: "March 24 2:00 PM" , icon : "bi bi-sun-fill",type: "sunny", temp: 34 },
  { day: "Tuesday",date: "March 25 2:00 PM" ,icon : "bi bi-cloud", type: "cloudy", temp: 26 }
];

mongoose.connect('mongodb://localhost:27017').then(() => console.log('database conneted')).catch((err) => console.log("error",err));

var weatherschema = {
    day : String,
    date : String,
    icon : String,
    type : String,
    temp : Number
}

var weather = mongoose.model('weather',weatherschema);

// async function addData() {
//     await weather.insertmany(weatherData)
    
// }

// addData().then(()=> console.log("added data")).catch((err) => console.log("error",err));

app.get('/weather', async function (req,resp) {
    
    var data = await weather.find();
    resp.json(data);
    console.log(data);

})

app.listen('3000', ()=> {
console.log("server running at http://localhost:3000");
})