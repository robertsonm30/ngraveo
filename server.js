var express = require("express");
var bodyParser = require("body-parser")
var mongoose = require("mongoose");
// Initialize Express
var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());



var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/ngraveo";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {});

app.post("/saveproduct",function(req,res){
	console.log("works")
})

app.listen(3001, function() {
  console.log("App running on port 3000!");
});