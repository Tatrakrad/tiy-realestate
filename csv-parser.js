var fs = require('fs');



function parse(callback){
  var callbackForReadFile = function(err,fileContents){

    var output = fileContents.split('\r');

    callback(output);
  };


  fs.readFile('Sacramentorealestatetransactions.csv','utf-8',callbackForReadFile);
  //this file is split with /r!
  console.log("reading file on disk");

}

module.exports = parse;
