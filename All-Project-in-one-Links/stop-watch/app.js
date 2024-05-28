// stop watch timer application

let timerInterval;
let timer = 0;
let isRunning = false;
let seconds = 300; // total 5 minutes

const startTimer = document.getElementById("start-timer-btn");
const resetTimer = document.getElementById("reset-timer-btn");
const timerDisplay = document.getElementById("timer-display");

// stop watch timer

const startWatch = document.getElementById("start-stopwatch-btn");
const resetWatch = document.getElementById("reset-stopwatch-btn");
const watchDisplay = document.getElementById("stopwatch-display");

// timer

function updateTimerDisplay() {
  seconds--; // matlab 5 minutes se minus ho gye.
  let minutes = Math.floor(seconds / 60);  // 5 minutes se 60 minutes me convert ho gye.
  let remainingSeconds = seconds % 60; // remaining seconds nikalne ke liye 60 se mod laga diya.
  const display = `<span>${
    minutes < 10 ? "0" : ""
  }</span><span>${minutes}</span>  : <span class="span-zero">${
    remainingSeconds < 10 ? "0" : ""
  }</span><span class="span-zero">${remainingSeconds}</span>`;
  timerDisplay.innerHTML = display;
}

function resetTimerFunction() {
  seconds = 300; // set 5 minutes;
  clearInterval(timerInterval);
  isRunning = false;
  timerDisplay.innerHTML = `<span>05</span> : <span class="span-zero">00</span>`;
}

let startTimerFunction = () => {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
  } else {
    timerInterval = setInterval(updateTimerDisplay, 1000);
    isRunning = true;
  }
};

startTimer.addEventListener("click", startTimerFunction);
resetTimer.addEventListener("click", resetTimerFunction);

// stop watch timer

let watchTimerInterval;
let watchTimer = 0;
let stopwatchHours = document.getElementById("stopwatch-hours");
let stopwatchMinutes = document.getElementById("stopwatch-minutes");
let stopwatchSeconds = document.getElementById("stopwatch-seconds");
let stopwatchMilliSeconds = document.getElementById("stopwatch-milliseconds");

function updateWatchDisplay() {
  watchTimer++;
  let milliSeconds = Math.floor(watchTimer % 100) % 60;
  let seconds = Math.floor(watchTimer / 100) % 60;
  let minutes = Math.floor(watchTimer / 100 / 60);
  let hours = Math.floor(watchTimer / 100 / 60 / 60);
  const display = `<span>${
    hours < 10 ? "0" : ""
  }</span><span>${hours}</span> : <span>${
    minutes < 10 ? "0" : ""
  }</span><span>${minutes}</span> : <span>${
    seconds < 10 ? "0" : ""
  }</span><span>${seconds}</span> : <span>${
    milliSeconds < 10 ? "0" : ""
  }</span><span>${milliSeconds}</span>`;

  stopwatchHours.innerHTML = hours;
  stopwatchMinutes.innerHTML = minutes;
  stopwatchSeconds.innerHTML = seconds;
  stopwatchMilliSeconds.innerHTML = milliSeconds;

  watchDisplay.innerHTML = display;
}

function resetWatchFunction() {
  watchTimer = 0;
  clearInterval(watchTimerInterval);
  watchDisplay.innerHTML = `<span>00</span> : <span>00</span> : <span>00</span> : <span>00</span>`;
}

let startWatchFunction = () => {
  watchTimerInterval = setInterval(updateWatchDisplay, 10);
};

startWatch.addEventListener("click", startWatchFunction);
resetWatch.addEventListener("click", resetWatchFunction);
