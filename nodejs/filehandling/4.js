var fs = require("fs");
const { json } = require("stream/consumers");

fs.readFile("customer.json","utf-8",function(err,data){
    if(err){
        console.log("File Not Found")
    }
    else{
        let dat = JSON.parse(data);

        for(var i =0 ; i < dat.length ; i++){
            console.log(dat[i].custname + " "+ dat[i].phno);
        }
    }

})
