// RUN ME:
// node server

var express = require('express');
var app = express();

// Look for static file
app.use(express.static(__dirname + "/public"));

app.listen(3000);
console.log("Server running on port 3000");