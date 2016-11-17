var express = require('express');
var app = express();
var parser = require('./csv-parser.js')
app.use(express.static('public'));


app.get('/', function(req, res){
 res.sendFile('/index.html');

});
//
app.get('/api/realestatedata', function(req,res){

  var callback = function(outputDone){
    res.send(outputDone);
  }

  parser(callback);
  console.log('delegated to parser');

});

app.listen(3001, function() {
  console.log('Listening on port 3001');
});
