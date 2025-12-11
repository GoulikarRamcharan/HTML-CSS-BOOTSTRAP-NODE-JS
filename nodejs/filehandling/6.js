var fs = require("fs");

fs.readFile("sample.txt","utf-8",function(err,data){

    if(err){
        console.log("File not found");
    }
    else{
        
         var dat = data.split("\n");

        for(var i = 0; i < dat.length ; i++){
            console.log(i+1 +" .    "+ dat[i])
            
        }
    }
})