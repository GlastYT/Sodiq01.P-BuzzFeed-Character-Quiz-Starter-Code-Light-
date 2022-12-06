document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {

  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all three inputs for your questions.
  
  let button = document.querySelector(".submit");
  let displayResult = document.querySelector(".displayResult");
  let result = document.querySelector(".result");
  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question.




  button.onclick = function() {
let q1Score = document.querySelector('input[name="q1"]:checked').value;
  console.log(q1Score);
let q2Score = document.querySelector('input[name="q2"]:checked').value;
  console.log(q2Score);
let q3Score = document.querySelector('input[name="q3"]:checked').value;
  console.log(q3Score);
let q4Score = document.querySelector('input[name="q4"]:checked').value;
  console.log(q4Score);
let scoreSum = Number(q1Score) + Number(q2Score) + Number(q3Score) + Number(q4Score);
  console.log(scoreSum);
if (scoreSum === 16 || scoreSum === 15 || scoreSum === 14 || scoreSum === 13){
  result.innerHTML = "You have great self-care, keep it up!"
} else if (scoreSum === 12 || scoreSum === 11){
  result.innerHTML = "You have pretty good self-care. Some improvements can be made, but you’re doing good!"
} else if (scoreSum === 10 || scoreSum === 9){
  result.innerHTML = "You have decent self-care. However, you may want to consider making changes to your sleep and diet."
} else if (scoreSum === 8 || scoreSum === 7 || scoreSum === 6 || scoreSum === 5){
  result.innerHTML = "You have poor self-care. You should consider getting more sleep, making changes to your diet, and getting more exercise."
} else if (scoreSum === 4){
  result.innerHTML = "You have really poor self-care. You should try to get more sleep, make healthy additions to your diet, and exercise at least twice a week."
}
    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question.





    // task 7: create a conditional statement for the responses to Question 1 based on the user input.




    // task 8: create a conditional statement for the responses to Question 2 based on the user input.




    // task 9: create a conditional statement for the responses to Question 3 based on the user input.




    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.


    

    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.






  };
}