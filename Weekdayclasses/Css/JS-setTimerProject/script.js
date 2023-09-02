"use strict";

let counterDisplay = document.querySelector("h1");
let buttons = [...document.querySelectorAll("p")];

let seconds = 0;
let minute = 0;
let hour = 0;

let globalId = null;

buttons[0].addEventListener("click", () => {
  let timerId = setInterval(() => {
    let outputSeconds = seconds > 9 ? seconds : `0${seconds}`;
    let outputMinute = minute > 9 ? minute : `0${minute}`;
    let outputHour = hour > 9 ? hour : `0${hour}`;
    seconds++;
    if (seconds === 60) {
      minute++;
      seconds = 0;
    }

    if (minute === 60) {
      hour++;
      minute = 0;
    }
    console.log(seconds);
    counterDisplay.textContent = `${outputHour}:${outputMinute}:${outputSeconds}`;
  }, 100);

  globalId = timerId;
});

buttons[1].addEventListener("click", () => {
  clearInterval(globalId);
});

buttons[2].addEventListener("click", () => {
  clearInterval(globalId);
    seconds = 0;
    minute = 0;
    hour = 0;
  counterDisplay.textContent = `0${hour}:0${minute}:0${seconds}`;

});
