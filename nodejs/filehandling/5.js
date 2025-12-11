var fs = require("fs");


var output = "BookId | BookName | Author | sellingPrice | FinalPrice  \n";
fs.readFile("book.json","utf-8",(err,data)=>{
    if(err){
        console.log("Error in reading file");
    }
    else {
        var books = JSON.parse(data);
        for(var i =0 ; i < books.length; i++){
            books[i].FinalPrice = books[i].sellingPrice - books[i].sellingPrice * 0.10; 
        }
        for(var i =0 ; i <books.length ; i++){
        console.log(books[i]);
}

for(var i =0 ; i <books.length ; i++){
       output += `${books[i].bookId}  |  ${books[i].bookName}  |  ${books[i].author}  |  ${books[i].sellingPrice}  |  ${books[i].FinalPrice}\n`;
}
    }
    fs.writeFile("book.txt",output,"utf-8",(err)=>{
    if(err){
        console.log("Error");
    }
    else{
        console.log("Done Final");
    }
});
    
});


