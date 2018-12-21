var express = require('express');
var path = require('path');

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/app/public/survey"));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


app.get('/survey', function(req, res){
    res.sendFile(path.join(__dirname, "/app/public/survey/"));
}); 


app.get("/survey/questions", function (req, res) {

    var questions = [{
            question: "How much do you like your relatives?",
            options: ['1', '2', '3', '4', '5']
        },
        {
            question: "How much of a family person are you?",
            options: ['1', '2', '3', '4', '5']

        },
        {
            question: "How awesome do you think dog is?",
            options: ['1', '2', '3', '4', '5']
        },
        {
            question: "How awesome do you think cat is?",
            options: ['1', '2', '3', '4', '5']
        },
        {
            question: "How much do you like dessert?",
            options: ['1', '2', '3', '4', '5']
        },
        {
            question: "What do you think of junk food?",
            options: ['1', '2', '3', '4', '5']
        },
        {
            question: "How much do you like outdoor activity?",
            options: ['1', '2', '3', '4', '5']
        },
        {
            question: "How much do you care about environment?",
            options: ['1', '2', '3', '4', '5']
        },
        {
            question: "How much do you hate racism?",
            options: ['1', '2', '3', '4', '5']
        },
        {
            question: "What do you think about Donald Trump?",
            options: ['1', '2', '3', '4', '5']
        },
    ];

    res.json(questions);

});

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});