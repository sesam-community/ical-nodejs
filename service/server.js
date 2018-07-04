var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var ical = require('node-ical');

var parserLimit = process.env.PARSER_LIMIT || '1000kb';

var url = process.env.URL;
var cookie = process.env.COOKIE || '';

var app = express();

app.use(bodyParser.json({limit: parserLimit}));
app.use(morgan('tiny'));

// Configure router to respond with a list of entities to /entities
app.get("/entities", function (request, response) {
  ical.fromURL(url, {
    headers: {
      'Cookie': cookie
    }
  }, function(err, data) {
    if (err) {
      res.status(500).send(err);
      return;
    }
    response.writeHead(200, {"Content-Type": "application/json"});
    var first = true;
    response.write("[");
    Object.keys(data).forEach(function(key) {
      if (first) {
        first = false;
      } else {
        response.write(",");
      }
      response.write(JSON.stringify(Object.assign({_id: key}, data[key])));
    });
    response.end("]");
  });
});

// Listen on port 5000, IP defaults to 127.0.0.1
app.listen(5000, "0.0.0.0", function () {
  console.log("Server running at http://0.0.0.0:5000/");
});
