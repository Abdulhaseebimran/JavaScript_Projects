// Password Generator App

let passwordLength = 8;

let isUpperCase = false;
let isNumber = false;
let isSymbol = false;

const passwordRangeInput = document.getElementById("passRangeInput");
const passwordRangeValue = document.getElementById("passRangeValue");
const generatePasswordBtn = document.getElementById("genBtn");
const passwordElement = document.getElementById("password");

const generatePassword = (passLength) => {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = isUpperCase ?  "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    const numbers = isNumber ?  "0123456789" : "";
    const symbols = isSymbol ? "!@#$%^&*()_+=" : "";

    const passwordChar = lowerCase + upperCase + numbers + symbols;
    let password = "";

    for(let i = 0; i < passLength; i++){
        const charIndex = Math.floor(Math.random() * passwordChar.length);
        password += passwordChar[charIndex];
    }
    return password;
};

passwordRangeInput.addEventListener("input", (e) => {
     passwordLength = parseInt(e.target.value);
     passwordRangeValue.innerText = passwordLength;
});


generatePasswordBtn.addEventListener("click", () => {
    const upperCaseElement = document.getElementById("uppercase");
    const numberElement = document.getElementById("Numbers");
    const symbolElement = document.getElementById("symbols");

    isUpperCase = upperCaseElement.checked;
    isNumber = numberElement.checked;
    isSymbol = symbolElement.checked;

    const password = generatePassword(passwordLength);
    passwordElement.innerHTML = password;
    // console.log(password);
});

passwordElement.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordElement.innerText).then(() => {
        alert("Password copied to clipboard");
    }).catch((err) => {
        // console.log(err);
        alert("Failed to copy password");
    });
});