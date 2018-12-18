
app.get("/api/friends", function (req,res){
return res.json(friends);

});

app.post("api/friends", function(req,res){
    var newSurveyResult = req.body;
    console.log(newSurveyResult);
    friends.push(newSurveyResult);
    return res.json(friends);
});




