function add(a,b){
    return   a + b;
    // console.log("Addition: " + res);
}
function sub(a,b){
    var res = a-b;
    console.log("subtraction is:"+ res);
}


function mul(a,b){
   return a*b;
    // console.log("Multiplication is:"+ res);
}
function div(a,b){
    var res = a/b;
    console.log("Division is:"+ res);
}

module.exports = { add , sub, mul , div }

