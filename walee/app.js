// let input = document.getElementById('inputBox');
// let button = document.querySelectorAll('button');

// let string = "";
// let arr = Array.from(buttons);
// arr.forEach(button => {
//     button.addEventListener('click', (e) => {
//         if (e.target.innerHTML == '=') {
//             string = eval(string);
//             input.value = string;
//         } else if (e.target.innerHTML == 'AC') {
//             string = "";
//             input.value = string;
//         } else if (e.target, innerHTML == 'DEL') {
//             string = string.substring(0, string.length - )
//             input.value = string;
//         } else {
//             string += e.target.innerHTML;
//             input.value = string;
//         }
//     })
// })


function getNumber(num) {
    var result = document.getElementById("result");
    result.value += num;
}

function clearResult() {
    var result = document.getElementById("result");
    result.value = ""
}

function getResult() {
    var result = document.getElementById("result");
    result.value = eval(result.value)
}