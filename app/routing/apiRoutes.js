var path = require("path");

var friendsName = require("../data/friends");
var newArray = [];


//Route
//============================================

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsName);
    });

    app.get("/survey", function(req,res) {
        res.sendFile(path.join(__dirname, "../survey/index.html"));
    })

    app.post("/api/friends", function (req, res) {
        for (var i = 0; i < req.body.scores.length; i++) {
            newArray.push(req.body.scores[i]);
        }
    });
};