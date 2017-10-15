// Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});