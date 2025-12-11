var fs = require("fs");


fs.readFile("account.txt","utf-8",function(err,data){
    if(err){
        console.log("File Not Found")
    }
    else{

        var arr = data.split("\n");

        console.log(arr);

        var da = arr.map(lines => lines.split(":"));

        console.log(da);

        let sum = 0;
        for(var i = 0 ; i <da.length ; i++){
            sum = sum + parseInt(da[i][3]);
        }
        console.log(sum);
    }

})