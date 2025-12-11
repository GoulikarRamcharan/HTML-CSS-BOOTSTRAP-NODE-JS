const fs = require("fs");

var arr = ["ram","raj","ved","tej"];


// let data =fs.readFileSync("1.js").toString();


// eval(data);

// let put = arr.join("|");

console.log(arr);


fs.writeFileSync("names.txt",arr.join("|"));