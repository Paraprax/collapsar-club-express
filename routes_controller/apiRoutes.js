//create a set of routes for getting and posting booth data

//link our routes to a series of DATA SOURCES
//these data sources hold ARRAYS OF INFO on booth-data, waitlists, etc

var tableData = require("../data_model/tableData");
var waitlistData = require("../data_model/waitinglistData");

module.exports = function(app){

    //when our express server (app) receives a 'get' request from a client to this route..
    app.get("/api/tables", function(req, res){
        res.json(tableData); //it serves back a json response of tableData
    })

    //ditto with the waitlist data
    app.get("/api/waitlist", function(req, res) {
        res.json(waitlistData);
    })

    //when our express server(app) receives a 'post' request from a client to this route
    app.post("api/tables", function(req, res){
        
        if (tableData.length < 5) { //if the tableData array has less than five bookings in it
            tableData.push(req.body); //the data in the post request will get added to that array
            res.json(true);
        }
        else {
            waitlistData.push(req.body); //else it'll get added to the waiting list array
            res.json(false);
        }
    });

    app.post("/api/clear", function(req, res) {
        // just used to empty out the arrays of data while testing/building etc.
        tableData.length = [];
        waitListData.length = [];

        res.json({ ok: true });
    });
};



