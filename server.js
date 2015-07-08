// RUN ME:
// node server

var express = require('express');
var app = express();

// Look for static file
app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req, res) {
  // This should appear in Terminal
  console.log("I received a get request");

  scores = [1,2,3];
  // Generate a response by generating the "scores" variable in a JSON format
  res.json(scores);
});

app.listen(3000);
console.log("Server running on port 3000");