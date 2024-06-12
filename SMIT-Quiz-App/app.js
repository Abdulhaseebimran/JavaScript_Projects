// SMIT Quiz App

let mcqsQuestion = [
  {
    question: "What does CSS stand for?",
    a: "Creative Style Sheets",
    b: "Cascading Style Sheets",
    c: "Computer Style Sheets",
    d: "Colorful Style Sheets",
    correctAnswer: "b",
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    a: "<list>",
    b: "<ul>",
    c: "<ol>",
    d: "<li></li>",
    correctAnswer: "b",
  },
  {
    question: "Which of the following is NOT a valid JavaScript data type?",
    a: "string",
    b: "boolean",
    c: "character",
    d: "number",
    correctAnswer: "c",
  },
  {
    question: "What does the 'href' attribute in the anchor tag (<a>) specify?",
    a: "The height of the link",
    b: "The color of the link",
    c: "The destination URL of the link",
    d: "The font family of the link",
    correctAnswer: "c",
  },
  {
    question: "In JavaScript, which keyword is used to declare a variable?",
    a: "var",
    b: "let",
    c: "const",
    d: "set",
    correctAnswer: "a",
  },
  {
    question: "Which CSS property is used to change the color of text?",
    a: "text-color",
    b: "color",
    c: "font-color",
    d: "text-style",
    correctAnswer: "b",
  },
  {
    question: "What does the HTML <canvas> element provide?",
    a: "A container for graphics",
    b: "A container for text",
    c: "A container for audio",
    d: "A container for video",
    correctAnswer: "a",
  },
  {
    question:
      "Which method is used to add a new element to the end of an array in JavaScript?",
    a: "append()",
    b: "push()",
    c: "add()",
    d: "insert()",
    correctAnswer: "b",
  },
  {
    question: "What is the purpose of the CSS property 'float'?",
    a: "To align text within a block",
    b: "To clear floated elements",
    c: "To position an element to the right or left of its container",
    d: "To set the opacity of an element",
    correctAnswer: "c",
  },
  {
    question: "What does the JavaScript function 'querySelector()' do?",
    a: "It selects the first element that matches a specified CSS selector",
    b: "It selects all elements that match a specified CSS selector",
    c: "It selects the last element that matches a specified CSS selector",
    d: "It selects elements based on their IDs",
    correctAnswer: "a",
  },
];

let courseCards = document.getElementById("course-cards");
let courseList = document.getElementById("courseList1");
let courseList2 = document.getElementById("courseList2");
let courseList3 = document.getElementById("courseList3");
let courseList4 = document.getElementById("courseList4");
let courseList5 = document.getElementById("courseList5");
let courseList6 = document.getElementById("courseList6");
let courseList7 = document.getElementById("courseList7");
let courseList8 = document.getElementById("courseList8");
let courseList9 = document.getElementById("courseList9");
let keySctions = document.getElementById("keySection");
let inputPassowrd = document.getElementById("password");
let backToMain = document.getElementById("backs");
let myFooter = document.getElementById("my-footer");
let quizForm = document.getElementById("quizes");
let resultDiv = document.getElementById("result");
let topHeading = document.querySelector(".heading");
let navBar = document.querySelector(".navbar");

function JoinCourse() {
  courseCards.style.display = "none";
  courseList.style.display = "block";
  keySctions.style.display = "none";
  topHeading.style.display = "block";
  mainPage.style.display = "none";
}

function JoinCourse2() {
  courseCards.style.display = "none";
  courseList2.style.display = "block";
  keySctions.style.display = "none";
  mainPage.style.display = "none";
}

function JoinCourse3() {
  courseCards.style.display = "none";
  courseList3.style.display = "block";
  keySctions.style.display = "none";
  mainPage.style.display = "none";
}

function JoinCourse4() {
  courseCards.style.display = "none";
  courseList4.style.display = "block";
  keySctions.style.display = "none";
  login.style.display = "none";
  signup.style.display = "none";
  mainPage.style.display = "none";
}

function JoinCourse5() {
  courseCards.style.display = "none";
  courseList5.style.display = "block";
  keySctions.style.display = "none";
  mainPage.style.display = "none";
}

function JoinCourse6() {
  courseCards.style.display = "none";
  courseList6.style.display = "block";
  keySctions.style.display = "none";
  mainPage.style.display = "none";
}

function JoinCourse7() {
  courseCards.style.display = "none";
  courseList7.style.display = "block";
  keySctions.style.display = "none";
  mainPage.style.display = "none";
}

function JoinCourse8() {
  courseCards.style.display = "none";
  courseList8.style.display = "block";
  keySctions.style.display = "none";
  mainPage.style.display = "none";
}

function JoinCourse9() {
  courseCards.style.display = "none";
  courseList9.style.display = "block";
  keySctions.style.display = "none";
  mainPage.style.display = "none";
}

function backToHome() {
  courseCards.style.display = "block";
  topHeading.style.display = "block";
  myFooter.style.display = "block";
  courseList.style.display = "none";
  courseList2.style.display = "none";
  courseList3.style.display = "none";
  courseList4.style.display = "none";
  courseList5.style.display = "none";
  courseList6.style.display = "none";
  courseList7.style.display = "none";
  courseList8.style.display = "none";
  courseList9.style.display = "none";
  keySctions.style.display = "none";
  resultDiv.style.display = "none";
  loginUI.style.display = "none";
  registerUI.style.display = "none";
  quizForm.style.display = "none";
  mainPage.style.display = "none";
  resultDiv.style.display = "none";
}

function startQuiz() {
  if (inputPassowrd.value === "haseeb") {
    keySctions.style.display = "none";
    topHeading.style.display = "none";
    quizForm.style.display = "flex";
    myFooter.style.display = "block";
    // navBar.style.display = "block";
    startTimer();
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Your Quiz has been Started",
      showConfirmButton: false,
      timer: 1500,
    });
  } else if (inputPassowrd.value === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Enter a valid Key...",
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Enter Correct Key...!",
    });
  }
}

function key() {
  keySctions.style.display = "flex";
  courseList.style.display = "none";
  courseList2.style.display = "none";
  courseList3.style.display = "none";
  courseList4.style.display = "none";
  courseList5.style.display = "none";
  courseList6.style.display = "none";
  courseList7.style.display = "none";
  courseList8.style.display = "none";
  courseList9.style.display = "none";
  myFooter.style.position = "fixed";
  myFooter.style.bottom = 0;
  resultDiv.style.display = "none";
  loginUI.style.display = "none";
  registerUI.style.display = "none";
  mainPage.style.display = "none";
}

let questionGenerate = document.getElementById("questionGenerate");
let option1 = document.getElementById("option1_radio");
let option2 = document.getElementById("option2_radio");
let option3 = document.getElementById("option3_radio");
let option4 = document.getElementById("option4_radio");
let nextBtn = document.querySelector("#nextBtn");
let submitBtn = document.querySelector("#submitBtn");
let allInputs = document.querySelectorAll("input[type='radio']");

let correct = 0,
  incorrect = 0,
  total = mcqsQuestion.length;
let index = 0;
function loadQuestion() {
  if (total === index) {
    return endQuiz();
  }
  reset();
  let data = mcqsQuestion[index];
  console.log(data);
  questionGenerate.innerHTML = `${index + 1}) ${data.question}`;
  allInputs[0].nextElementSibling.innerText = data.a;
  allInputs[1].nextElementSibling.innerText = data.b;
  allInputs[2].nextElementSibling.innerText = data.c;
  allInputs[3].nextElementSibling.innerText = data.d;
}

loadQuestion();

function submitQuiz() {
  const data = mcqsQuestion[index];
  const ans = getAnswer();
  if (ans === data.correctAnswer) {
    correct++;
  } else {
    incorrect++;
  }
  index++;
  loadQuestion();
  return;
}

function getAnswer() {
  let ans;
  allInputs.forEach((inputEl) => {
    if (inputEl.checked) {
      ans = inputEl.value;
      // console.log(inputEl.value);
    }
  });
  return ans;
}

function reset() {
  allInputs.forEach((inputEl) => {
    inputEl.checked = false;
  });
}

const endQuiz = () => {
  quizForm.style.display = "none";
  myFooter.style.display = "none";

  const finalScore = (correct / mcqsQuestion.length) * 100;

  const resultDiv = document.getElementById("result");
  if (!resultDiv) {
    console.error("Result container element (result) not found");
    return;
  }
  resultDiv.style.display = "block";

  let resultContent = "";
  if (finalScore < 60) {
    resultContent = `
      <div>
        <p class="failedText">You Are Failed! &#128542;</p>
      </div>
      <div>
        <p>Total Questions</p>
        <p>${mcqsQuestion.length}</p>
      </div>
      <div>
        <p>Correct Questions</p>
        <p>${correct}</p>
      </div>
      <h3 id="scorePercentage" class="failedScore">${finalScore} <span>%</span></h3>
    `;
  } else {
    resultContent = `
      <div>
        <p class="passedText">Congratulations, you passed! &#128522;</p>
      </div>
      <div>
        <p>Total Questions</p>
        <p>${mcqsQuestion.length}</p>
      </div>
      <div>
        <p>Correct Questions</p>
        <p>${correct}</p>
      </div>
      <h3 id="scorePercentage">${finalScore} <span>%</span></h3>
    `;
  }
  resultDiv.innerHTML = resultContent;
};

let timeLeft = 60;
let timerDisplay = document.getElementById("timer");
function startTimer() {
  timerDisplay.textContent = TimeFormat(timeLeft);
  timerInterval = setInterval(() => {
    timeLeft--;

    if (timeLeft < 0) {
      timeLeft = 0;
    }

    timerDisplay.textContent = TimeFormat(timeLeft);

    if (timeLeft === 0) {
      endQuiz();
    }
  }, 1000);
}

function TimeFormat(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

const loginName = document.getElementById("loginName");
const loginPass = document.getElementById("loginPassword");
const version = document.getElementById("version");
const clientName = document.getElementById("clientName");

// Function to display registration form
const loginUI = document.querySelector(".login-wrapper");
const loginEmailInput = document.querySelector(".loginEmailInput");
const loginPasswordInput = document.querySelector(".loginPasswordInput");

const registerUI = document.querySelector(".register-wrapper");
const registerImg = document.querySelector(".registerImg"),
  registerNameInputField = document.querySelector(".registerNameInput"),
  emailInputField = document.querySelector(".registerEmailInput"),
  passwordInputField = document.querySelector(".registerPasswordInput"),
  successRegisterContainer = document.querySelector(
    ".successRegisterContainer"
  );
const loginPage = document.getElementById("login-page");
const mainPage = document.getElementById("main-page");
const loggedIn__user = document.querySelector(".loggedIn__user");

const openDashboard = () => {
  loginPage.style.display = "flex";
  registerUI.style.display = "none";
  courseCards.style.display = "none";
  keySctions.style.display = "none";
  resultDiv.style.display = "none";
  topHeading.style.display = "none";
  quizForm.style.display = "none";
  mainPage.style.display = "none";
};

// Function to display Login form

const openLoginForm = () => {
  loginEmailInput.value = "";
  loginPasswordInput.value = "";
  loginUI.style.display = "flex";
  registerUI.style.display = "none";
};

const openRegistrationForm = () => {
  // Empty login fields
  loginEmailInput.value = "";
  loginPasswordInput.value = "";

  // Empty the registration fields
  registerNameInputField.value = "";
  emailInputField.value = "";
  passwordInputField.value = "";

  // Hide the login page and show the reg page
  loginUI.style.display = "none";
  registerUI.style.display = "flex";
};

// Function to avoid empty fields
const isEmpty = (str) => {
  return !str || !str.trim().length;
};

const noNumbersInName = (str) => {
  for (let i = 0; i < registerNameInputField.value.length; i++) {
    if (str[i].trim() >= "0" && str[i].trim() <= "9") {
      return true;
    }
  }
  return false;
};

// Function to prevent name input less than two alphabets

const nameInputSize = (str) => {
  if (str.length <= 2) {
    return true;
  }
  return false;
};

// Function to validate email

const validateEmail = (str) => {
  return str
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// Function to check password length

const passwordLength = (str) => {
  if (str.length <= 5) {
    return true;
  }
  return false;
};

let storage, arr, registeredUsers;

// Function to check if the user is already registered
const alreadyRegistered = () => {
  storage = localStorage.getItem("Registered Users");
  arr = JSON.parse(storage);
  if (!arr || arr.length === 0) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i] &&
        registerNameInputField.value.toLowerCase() === arr[i].register_name) ||
      emailInputField.value.toLowerCase() === arr[i].register_email
    ) {
      return true;
    }
  }
  return false;
};

// Function to register a user
const register = () => {
  if (noNumbersInName(registerNameInputField.value)) {
    Swal.fire({
      icon: "error",
      title: "Name shouldn't contain numbers!",
      showConfirmButton: false,
      timer: 1500,
    });
  } else if (!validateEmail(emailInputField.value)) {
    Swal.fire({
      icon: "error",
      title: "Invalid or incorrect email!",
      showConfirmButton: false,
      timer: 1500,
    });
  } else if (
    isEmpty(registerNameInputField.value) &&
    isEmpty(emailInputField.value) &&
    isEmpty(passwordInputField.value)
  ) {
    Swal.fire({
      icon: "error",
      title: "Please fill the fields!",
      showConfirmButton: false,
      timer: 1500,
    });
  } else if (isEmpty(registerNameInputField.value)) {
    Swal.fire({
      icon: "error",
      title: "Name can't be empty!",
      showConfirmButton: false,
      timer: 1500,
    });
  } else if (nameInputSize(registerNameInputField.value)) {
    Swal.fire({
      icon: "error",
      title: "Name should contain more than 2 characters!",
      showConfirmButton: false,
      timer: 1500,
    });
  } else if (isEmpty(emailInputField.value)) {
    Swal.fire({
      icon: "error",
      title: "Email can't be empty!",
      showConfirmButton: false,
      timer: 1500,
    });
  } else if (isEmpty(passwordInputField.value)) {
    Swal.fire({
      icon: "error",
      title: "Password can't be empty!",
      showConfirmButton: false,
      timer: 1500,
    });
  } else if (passwordLength(passwordInputField.value)) {
    Swal.fire({
      icon: "error",
      title: "Password should contain at least 6 characters!",
      showConfirmButton: false,
      timer: 1500,
    });
  } else if (alreadyRegistered()) {
    Swal.fire({
      icon: "error",
      title: "The name or email already exists. Go to the Login Page.",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    let storage = localStorage.getItem("Registered Users");
    let arr = JSON.parse(storage) || [];
    let registeredUsers = {
      register_name: registerNameInputField.value.toLowerCase(),
      register_email: emailInputField.value.toLowerCase(),
      register_password: passwordInputField.value,
    };

    arr.push(registeredUsers);
    localStorage.setItem("Registered Users", JSON.stringify(arr));

    Swal.fire({
      icon: "success",
      title: "Registration successful!",
      showConfirmButton: false,
      timer: 1500,
    });

    successRegisterContainer.style.cssText = "display:flex !important";
    registerImg.style.cssText = "height:528px !important";
  }
};

const goToLogin = () => {
  // Empty the registration fields before shwoing login page
  registerNameInputField.value = "";
  emailInputField.value = "";
  passwordInputField.value = "";

  // Hide the successful container div
  successRegisterContainer.style.display = "none";

  // Change the size of registration img to normal
  registerImg.style.cssText = "height:489px !important";

  // Hide the registration page and show login page
  loginUI.style.display = "flex";
  registerUI.style.display = "none";
  mainPage.style.display = "none";
};

// Function to capitalize the first letter of name on dashboard

const capitalizeFirstLetter = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

// Function to login a user
const login = () => {
  let storage = localStorage.getItem("Registered Users");
  let arr = JSON.parse(storage);
  let flag2 = false;

  if (!arr || arr.length === 0) {
    arr = [];
  }

  for (let i = 0; i < arr.length; i++) {
    if (
      loginEmailInput.value.toLowerCase() === arr[i].register_email &&
      loginPasswordInput.value === arr[i].register_password
    ) {
      Swal.fire({
        icon: 'success',
        title: 'Login successful!',
        showConfirmButton: false,
        timer: 1500
      });

      loginEmailInput.value = "";
      loginPasswordInput.value = "";
      flag2 = true;
      loginPage.style.display = "none";
      courseCards.style.display = "flex";
      topHeading.style.display = "block";
      mainPage.style.display = "none";
      loggedIn__user.innerHTML = `${capitalizeFirstLetter(
        arr[i].register_name || "User"
      )}`;
      break;
    }
  }

  if (!flag2) {
    Swal.fire({
      icon: 'error',
      title: 'Incorrect credentials!',
      showConfirmButton: false,
      timer: 1500
    });
  }
};

const startingPage = () => {
  loginPage.style.display = "none";
  courseCards.style.display = "none";
  keySctions.style.display = "none";
  resultDiv.style.display = "none";
  topHeading.style.display = "none";
  quizForm.style.display = "none";
  mainPage.style.display = "block";
};

window.onload = startingPage;

// Switch theme

// const themeToggle = document.getElementById("themeToggle"),
//   themeToggle__responsive = document.getElementById("themeToggle__responsive"),
//   body = document.body;

// const applyTheme = (theme) => {
//   body.setAttribute("data-theme", theme);
// };

// const syncSwitches = (isDarkMode) => {
//   themeToggle.checked = isDarkMode;
//   themeToggle__responsive.checked = isDarkMode;
// };

// const toggleTheme = (event) => {
//   const isDarkMode = event.target.checked;

//   if (isDarkMode) {
//     applyTheme("dark");
//   } else {
//     applyTheme("light");
//   }

//   syncSwitches(isDarkMode);
// };

// themeToggle.addEventListener("click", (event) => toggleTheme(event));
// themeToggle__responsive.addEventListener("click", (event) =>
//   toggleTheme(event)
// );