var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// View Home
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/index.html'));
});

// Allow assets
app.use(express.static(path.join(__dirname, 'view')));

// Json
app.get('/menu', function(req, res) {
  items = [
    {"id": "1", "name": "Boeign"},
    {"id": "2", "name": "Airbus"},
    {"id": "3", "name": "Bellanca"},
    {"id": "4", "name": "Chernov"},
    {"id": "5", "name": "Centrair"},
    {"id": "6", "name": "Dassault"}
  ];

  res.contentType('application/json');
  res.send(JSON.stringify(items));
});

app.post("/postForm", function (req, res) {
  console.log(req.body);
});

app.listen(8000, function() {
  console.log('App andando en el puerto 8000!');
});
