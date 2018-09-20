var fs = require("fs");
var http = require("http");

http.createServer(function(req, res) {
  try {
    fs.readFile("demofile1.html", function(err, data) {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
    });
  } catch(err) {
    console.error(err);
  }
}).listen(8080);