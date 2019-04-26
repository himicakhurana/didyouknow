    $(document).ready(function() {

        $("#login").submit(function (event) {
          var          username = document.getElementById("username").value;
        var password_val = document.getElementById("password").value;
        if(username=='ariak20@gms.org'&& password_val=='yay112'){

          alert("Logged in.")
            location.href = "home.html";

        }else{
          location.href = "quiz_signup.html";
        }

            event.preventDefault();
        });

        $("#signup").submit(function (event) {
          var          password1 = document.getElementById("password1").value;
        var password2 = document.getElementById("password2").value;
        var fname = document.getElementById("fname").value;
        if(password2==password1){
          var length=password1.length;
          if (length>5){
            alert("TOO LONG!!!! CHANGE IT!!!")
          }
          validate_name(fname);
            location.href = "home.html";

        }else{
          alert("Password 1 and password 2 do not match")
        }

            event.preventDefault();
        });


        /**
         * Created by himica on 2/4/2019.
         */
    });

function validate_name(name){
  alert(name.length);
}
const myQuestions = [
  {
    question:"What is the average number of guns per person in the U.S?",
    answers: {
      a: "1 gun per 2 people",
      b: "1 gun per 3 people",
      c: "6 guns per 5 people",
      d: "1 gun per 1 person"
    },
    correctAnswer: "c"
  },
  {
    question: "How many children are killed or injured due to guns?",
    answers: {
      a: "5 children injured or killed a week.",
      b: "One child killed or injured per day.",
      c: "6 children killed or injured per week.",
      d: "2 children killed or injured per hour."
    },
      correctAnswer: "c"
  }];
