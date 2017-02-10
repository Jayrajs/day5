//load lib
var express = require("express");
var path = require("path");

//create instance of the app
var app = express();

//set our port
app.set("port", 3000);

//define route
    //loads our content
app.use(express.static(path.join(__dirname, "public")));

   //loads our libraries ==> for the client
app.use(express.static(path.join(__dirname, "bower_components")));

//start the server
app.listen(app.get("port"), function(){
    console.log("Application started at port %d on %s" , app.get("port"), new Date())
});