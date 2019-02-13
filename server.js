//Dependencies:
var express = import("express");


//Set up the basic properties for our express server:

//create our app var and power it with the express library
var app = express();

//set the port
var PORT = process.env.PORT || 8080;

//set up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

//Router:
//point our server to a series of 'route' files, giving it a map of how to respond to requests from the client

require("./routes_controller/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//listener (to start our server when this whole files is run, ie. by node)
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});