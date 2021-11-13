var quizForm = document.querySelector('#quizForm');
var submitBtn = document.querySelector('#submit');
var showOutput = document.querySelector('#showOutput');

const correctAnswers = ['90°', 'right angled'];

submitBtn.addEventListener('click', calculateScore);

function calculateScore() {
    var score = 0;
    var index = 0;

    const data = new FormData(quizForm);
    for (var values of data.values()) {

        if (correctAnswers[index] == values) {
            score += 1;
        }
        index += 1;
    }
    showOutput.innerText = "Score is : " + score;
}