function calcArea(radius){
    var area = Math.PI* radius * radius;
    console.log("area of circle is :"+ area);
}

function calcCircumference(radius){
    var area = 2 * Math.PI* radius ;
    console.log("Circumference of circle is :"+ area);
}
function calcDiameter(radius){
    var dia = 2 * radius;
    console.log("Diameter of circle is :"+ dia);
}

module.exports = {calcArea , calcCircumference ,calcDiameter};