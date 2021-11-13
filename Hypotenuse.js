var input = document.querySelectorAll('.input');
var submitBtn = document.querySelector('#submit');
var showOutput = document.querySelector('#showOutput');


submitBtn.addEventListener('click', calculateHypotenuse);

function calculateHypotenuse(){
    var length = input[0].value;
    var base = input[1].value;
    var sum = length*length + base*base; 
    var hypotenuse = Math.sqrt(sum);
    var output = Math.trunc(hypotenuse)
    showOutput.innerText = "Length of Hypotenuse is : " + output + "cm";
}