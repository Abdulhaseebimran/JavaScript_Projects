// unlimited color

const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

// console.log(randomColor());

let interval;
const startChangingColor = function () {
    if (!interval) {
        interval = setInterval(changeBgColor, 1000);
    }

    function changeBgColor() {
        document.querySelector('body').style.backgroundColor = randomColor();
    }
}

const stopChangingColor = function () {

    clearInterval(interval);
    interval = null;

    // function stopBgColor() {
    //     document.querySelector('body').style.backgroundColor = "black";
    // }
}

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);