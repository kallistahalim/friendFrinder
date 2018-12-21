$.ajax({
    url: 'http://localhost:3000/survey/questions',
    type: 'GET',
    success: function(questions){
        console.log(questions);
        for(var i = 0; i < questions.length; i++){
          // question.text(questions[i].question);
          // answer.text(questions[i].answer);
          console.log(questions[i].question)
          console.log(questions[i].options);

          var question = $('li').text(questions[i].question);
          $('.questions').append(question);
        }
    }
})
