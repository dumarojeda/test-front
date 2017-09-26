var express = require('express');
var app = express();

app.get('/menu', function(req, res) {

  items = [
    {"id": "1", "name": "Boeign"},
    {"id": "2", "name": "Airbus"}
  ];

  res.contentType('application/json');
  res.send(JSON.stringify(items));
});

app.listen(8000, function() {
  console.log('App andando en el puerto 8000!');
});
