var question = document.getElementById('question');
question.addEventListener('click', toggleAnswer);
var answerVisible = false;
var answer = document.getElementById('answer');

function toggleAnswer() {
  if (answerVisible) {
    answer.style.cssText = "display: none;";
  } else {
    answer.style.cssText = "display: block;";
  }
  answerVisible = !answerVisible;
}
