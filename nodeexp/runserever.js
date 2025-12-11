var http = require('http');
var fs = require('fs');

function processRequest(req, res) {
    fs.readFile("welcome.html",(err,data)=> {

        res.writeHead(200, {

            'Content-Length': data.toString().length,
            'Content-Type': 'text/html'
        })

        res.end(data.toString());
    })
}

var server = http.createServer(processRequest);

server.listen(3000,'localhost',()=> {
    console.log("Server is up and running on http://localhost:3000...");
})
  