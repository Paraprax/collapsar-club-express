//Dependencies
// the 'path' package for the join function to get the correct file path in the route to our html 
var path = require("path");

//Routing
module.exports = function(app) {
    //handle 'get' requests eg. when a user visits a page via a url pathway, serve them the homepage html file

    app.get("/booths", function(req,res) {
        res.sendFile(path.join(__dirname, "../public_view/booths.html"));
    })

    app.get("/reserve", function(req, res) {
        res.sendFile(path.join(__dirname, "../public_view/reserve.html"));
    });

    //if no matching pathway is found, default to serving them the homepage
    app.get("*", function(req,res) {
        res.sendFile(path.join(__dirname, "../public_view/homepage.html"));
    })
}