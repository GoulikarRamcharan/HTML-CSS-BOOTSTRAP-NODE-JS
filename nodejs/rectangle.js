function RectArea(length,breadth){
    var area = length * breadth ;
    console.log("Area OF Rectangle is :" + area);
}

function RectPerimeter(length,breadth){
    var area = 2 * length * breadth ;
    console.log("perimeter OF Rectangle is :" + area);
}

module.exports = { RectArea,RectPerimeter}