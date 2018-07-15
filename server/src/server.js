var express 		= require('express');
var bodyParser		= require('body-parser');
var butter 			= require('buttercms')('d4b9e81e5bd894cb24d7036a99de1c055cf867d9');
var config 			= require('./config/config');
var app 			= express();

app.use(bodyParser.json())

app.get('/posts', function (req, res) {
  res.send(
	[{
      title: "Hello World!",
      description: "Hi there! How are you?"
    }]
  );
});

app.listen(config.port, function () {
  console.log('Example app listening on port ' + config.port);
});