var input = document.querySelectorAll('.input');
var btn = document.querySelector('#IsTriangle');
var output = document.querySelector('#showOutput');
console.log(input, btn, output);

btn.addEventListener('click', isTriangle);

function isTriangle() {
    var returnedSum = calculateSumOfAngles(input[0].value, input[1].value, input[2].value);
    if (returnedSum == 180) {
        console.log("Angles form a Traingle")
        output.innerText = "Angles form a Traingle";
    } else {

        console.log("Angles doesn't forms a Triangle");
        output.innerText = "Angles don't form a Traingle";
    }
}

function calculateSumOfAngles(a1, a2, a3) {
    a1 = Number(a1);
    a2 = Number(a2);
    a3 = Number(a3);
    var sum = a1 + a2 + a3;
    return sum;
}
