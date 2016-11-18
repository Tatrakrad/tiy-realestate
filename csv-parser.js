var fs = require('fs');



function parse(callback){
  var callbackForReadFile = function(err,fileContents){

    var output = {

      listings:[]

    };

    var lines = fileContents.split('\r');

    for(var i=1;i<lines.length;i++){
      var line = lines[i];
      var values = line.split(',');

      output.listings.push({
        street: values[0],
        city: values[1],
        zip: values[2],
        state: values[3],
        beds: values[4],
        baths: values[5],
        sqft: values[6],
        type: values[7],
        sale_date: values[8],
        price: values[9],
        lat: values[10],
        long: values[11]
      });
    }

      // dynamically add properties when you arent a fucking computer peasant
      // if(i==0){
      //   for (var j=0; j<values.length;j++)
      //   var newProp = values[j];
      //   console.log(newProp);
      //   Object.defineProperty(output,newProp,{});
      // }
      // WRONG WRONG WRONG



    callback(output);
  };


  fs.readFile('Sacramentorealestatetransactions.csv','utf-8',callbackForReadFile);
  //this file is split with /r!
  // street,city,zip,state,beds,baths,sq__ft,type,sale_date,price,latitude,longitude
  console.log("reading file on disk");

}

module.exports = parse;
