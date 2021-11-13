var input = document.querySelectorAll('.input');
var btn = document.querySelector('#submit');
var showOutput = document.querySelector('#showOutput');

btn.addEventListener('click', calculateArea);

function calculateArea() {
    var base = input[0].value;
    var height = input[1].value;

    var Area = 0.5 * base * height;

    showOutput.innerText = "Area of Triangle is: " + Area + "cm²"

}