var focusButton = document.getElementById("focus");
var buttons = document.querySelectorAll("btn");
var shortBreakButton = document.getElementById("shortbreak");
var longBreakButton = document.getElementById("longbreak");
var startbtn = document.getElementById("btn-start");
var reset = document.getElementById("btn-reset");
var pause = document.getElementById("btn-pause");
var time = document.getElementById("time");
var set;
var count = 59;
var paused = true;
var minCount = 24;
time.textContent = `${minCount + 1}:00`;

const appendZero = (value) => {
    value = value < 10 ? `0${value}` : value;
    return value;
};
reset.addEventListener(
    "click",
    (resetTime = () => {
        pauseTimer();
        count = 59;
        minCount = 24;
        time.textContent = `${minCount + 1}:00`;
    })
);
const removeFocus = () => {
    button.forEach((btn) => {
        btn.classList.remove("btn-focus");
    });
};
focusButton.addEventListener("click", () => {
    removeFocus();
    focusButton.classList.add("btn-focus");
    pauseTimer();
    minCount = 24;
    count = 59;
    time.textContent = `${minCount + 1}:00`;
});
shortBreakButton.addEventListener("click", () => {
    removeFocus();
    shortBreakButton.classList.add("btn-focus");
    pauseTimer();
    minCount = 4;
    count = 59;
    time.textContent = `${appendZero(minCount + 1)}:00`;
});

longBreakButton.addEventListener("click", () => {
    removeFocus();
    longBreakButton.classList.add("btn-focus");
    pauseTimer();
    minCount = 14;
    count = 59;
    time.textContent = `${minCount + 1}:00`;
});

pause.addEventListener(
    "click",
    (pauseTimer = () => {
        paused = true;
        clearInterval(set);
        startbtn.classList.remove("hide");
        pause.classList.remove("show");
        reset.classList.remove("show");
    })
);
startbtn.addEventListener("click", () => {
    reset.classList.add("show");
    pause.classList.add("show");
    startbtn.classList.add("hide");
    startbtn.classList.remove("show");
    if (paused) {
        paused = false;
        time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
        set = setInterval(() => {
            count--;
            time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
            if (count == 0) {
                if (minCount != 0) {
                    minCount--;
                    count = 60;
                } else {
                    clearInterval(set);
                }
            }
        }, 1000);
    }
});