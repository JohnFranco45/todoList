const express = require('express');
const https = require("https");
const request = require("request")
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {

    var today = new Date();
    var currentDay = today.getDate();
    var day = "";

    if (currentDay === 6 || currentDay === 0) {
        res.sendFile(__dirname + "/weekend.html");
    } else {
        res.sendFile(__dirname + "/weekday.html");
        
    }

    console.log(currentDay);
    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wednesday";
    //         break;
    //     case 4:
    //         day = "Thursday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    //         break;
    //     default:
    //     console.log("Error: current day is not valid" + currentDay);
    // }
    // res.render("list", {
    //     kindOfDay: day
    });

app.listen(3000, function() {
    console.log("Server is RUNNING!")
});