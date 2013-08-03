var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

var buf = fs.readFileSync('index.html');
var info = buf.toString();
console.log(info)

app.get('/', function(request, response) {
    response.send(info);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
