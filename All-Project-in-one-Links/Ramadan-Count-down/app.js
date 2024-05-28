const targetDate = new Date("March 10, 2024 00:00:00 GMT+00:00").getTime();

function updateCountdown() {
    const newDate = new Date().getTime();
    const timeDifference = targetDate - newDate;

    if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        document.getElementById('count').innerHTML = '<div class="expired">Ramadan is here!</div>';
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // 1000ms * 60s * 60m * 24h
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // 1000ms * 60s * 60m
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)); // 1000ms * 60s
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000); // 1000ms

        document.getElementById('days').innerText = formatTime(days);
        document.getElementById('hours').innerHTML = formatTime(hours);
        document.getElementById('minutes').innerHTML = formatTime(minutes);
        document.getElementById('seconds').innerHTML = formatTime(seconds);

    }
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;  // if time is less than 10, add 0 before the time, else return the time
}

updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);