var http = require("http");
var url = require("url");

http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  var urlObject = url.parse(req.url, true).query;
  var txt = urlObject.year + " " + urlObject.month;
  res.end(txt);
}).listen(8080);