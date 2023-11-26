// alert("hello world");


//
// var a = 5;
// var b = 10;
// var c = a + b;
// console.log(c);


//
// var x = "Ali";
// var y = "waleed";
// var z = y + x;
// alert(z);


// //
// var f = 20;
// var g = "2";
// var h = f / g;
// alert(h);


//
// var a = 3;
// var b = 5;
// var c = 7;
// var d = b - a * c;
// alert(d); // the answer is - 16


// // 
// var a = 3;
// var b = 5;
// var c = 7;
// var d = (b - a) * c;
// alert(d); // the answer is 14


//
// var a = 5;
// var b = a++;
// alert(b); // the answer is 5


// 
// var x = 10;
// var y = x++ + ++x - x + x++ - ++x + x;
// console.log(y); // the answer is 22


//
// var a = prompt("Enter your age", "Your age is:");
// alert(a);


// //
// var a = prompt("Enter value", "Your value is:");
// var b = a + 10;
// console.log(b);

// var a = +prompt("Enter your value", "Your value is:");
// var b = a + 10;
// console.log("The output is", +" " + b);


// //
// var a = "Enter value";
// var b = "Your value is";
// var c = +prompt(a, b);
// var d = c + 10;
// document.write("The output is" + " " + d);
// console.log(d)

//
// var age = 20;
// if (age == 26) {
//     alert("Your age less")
// } else {
//     alert("You are no more")
// }

//
var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;
// document.getElementById("start").disabled = false;

function timer() {
    msec++
    msecHeading.innerHTML = msec;
    if (msec >= 100) {
        sec++
        secHeading.innerHTML = sec;
        msec = 0;
    } else if (sec >= 60) {
        min++
        minHeading.innerHTML = min
        sec = 0;
    }

}

function start() {
    interval = setInterval(timer, 10);
    // document.getElementById("start").disabled = false;
}
document.getElementById("start").disabled = true;

function stp() {
    clearInterval(interval);
    // document.getElementById("start").disabled = true;
}
document.getElementById("start").disabled = false;

function reset() {
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;

    stp();
}
document.getElementById("start").disabled = false;