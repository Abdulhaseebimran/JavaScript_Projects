// BMI Calculator

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#Weight").value);
    const result = document.querySelector("#result");

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid Weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // result show
        // result.innerHTML = `<span>BMI Result: ${bmi}</span>`;
        if (parseInt(bmi) < 18) {
            result.innerHTML = `BMI RESULT: ${bmi} you are under weight`
        } else if (parseInt(bmi) > 24) {
            result.innerHTML = `BMI RESULT: ${bmi} you are over weight`
        } else if (parseInt(bmi) > 18 || parseInt(bmi) < 24) {
            result.innerHTML = `BMI RESULT: ${bmi} you are in normal range`
        }
    }

});




