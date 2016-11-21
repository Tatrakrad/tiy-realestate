var express = require('express');
var app = express();
var parser = require('./csv-parser.js');

app.use(express.static('public'));
app.set('view engine','ejs');

//
app.get('/api/realestatedata', function(req,res){

  var callback = function(outputDone){
    res.send(outputDone);
  }

  parser(callback);
  console.log('delegated to parser');

});

app.get('/realestatedata', function(req,res){

  var callback = function(outputDone){
    res.render('listing-page',outputDone);
    console.log('Finished Rendering Page');
  }

  parser(callback);
  console.log('delegated to parser');

});

var port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log('Listening on port... ',port);
});
