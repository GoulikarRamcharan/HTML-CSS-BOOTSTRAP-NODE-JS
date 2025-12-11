function IsEqui(a,b,c){
    if(a == b == c){
        console.log("Equilateral Triangle");
    }
    else{
        console.log("Normal Triangle");
    }
}

function TriPerimeter(a,b,c){
    var res  = a+b+c ;
    console.log("the perimeter of triangle is :"+res);
}

module.exports = {
    IsEqui,TriPerimeter
}