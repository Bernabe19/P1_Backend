// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();
require('dotenv').config();  
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + process.env.PORT);
});


// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use("/public",express.static(__dirname + "/public"));
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/:date", function (req, res) {
  var date = req.params.date;
    let date1 = new Date(date);
    let date2 = new Date(parseInt(date));
    if(date1 != "Invalid Date"){
      res.json({"unix": date1.getTime(), "utc": date1});
    }else if(date1 == "Invalid Date" && date2 != "Invalid Date"){
      res.json({"unix": date2.getTime(), "utc": date2});
    }else{
      res.json({"error":"Invalid Date"});
    }
});





