var fs = require('fs');



function parse(callback){
  var callbackForReadFile = function(err,fileContents){

    var output = {
      fileContents;
    }

    callback(output);
  };


  fs.readFile('Sacramentorealestatetransactions.csv','utf-8',callbackForReadFile);
  console.log("reading file on disk");

}

module.exports = parse;
