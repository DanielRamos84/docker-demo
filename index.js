var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Bind to 0.0.0.0 to make it accessible from outside the container
var server = app.listen(3000, '0.0.0.0', function () {  // Change here
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
