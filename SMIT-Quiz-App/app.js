// SMIT Quiz App

let mcqsQuestion = [
    {
        question: "What does CSS stand for?",
        a: "Creative Style Sheets",
        b: "Cascading Style Sheets",
        c: "Computer Style Sheets",
        d: "Colorful Style Sheets"
    },
    {
        question: "Which HTML tag is used to define an unordered list?",
        a: "<list>",
        b: "<ul>",
        c: "<ol>",
        d: "<li></li>"
    },
    {
        question: "Which of the following is NOT a valid JavaScript data type?",
        a: "string",
        b: "boolean",
        c: "character",
        d: "number"
    },
    {
        question: "What does the 'href' attribute in the anchor tag (<a>) specify?",
        a: "The height of the link",
        b: "The color of the link",
        c: "The destination URL of the link",
        d: "The font family of the link"
    },
    {
        question: "In JavaScript, which keyword is used to declare a variable?",
        a: "var",
        b: "let",
        c: "const",
        d: "set"
    },
    {
        question: "Which CSS property is used to change the color of text?",
        a: "text-color",
        b: "color",
        c: "font-color",
        d: "text-style"
    },
    {
        question: "What does the HTML <canvas> element provide?",
        a: "A container for graphics",
        b: "A container for text",
        c: "A container for audio",
        d: "A container for video"
    },
    {
        question: "Which method is used to add a new element to the end of an array in JavaScript?",
        a: "append()",
        b: "push()",
        c: "add()",
        d: "insert()"
    },
    {
        question: "What is the purpose of the CSS property 'float'?",
        a: "To align text within a block",
        b: "To clear floated elements",
        c: "To position an element to the right or left of its container",
        d: "To set the opacity of an element"
    },
    {
        question: "What does the JavaScript function 'querySelector()' do?",
        a: "It selects the first element that matches a specified CSS selector",
        b: "It selects all elements that match a specified CSS selector",
        c: "It selects the last element that matches a specified CSS selector",
        d: "It selects elements based on their IDs"
    }
]

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
function JoinCourse() {
    courseCards.style.display = "none";
    courseList.style.display = "block";
    keySctions.style.display = "none";
}

function JoinCourse2() {
    courseCards.style.display = "none";
    courseList2.style.display = "block";
    keySctions.style.display = "none";
}

function JoinCourse3() {
    courseCards.style.display = "none";
    courseList3.style.display = "block";
    keySctions.style.display = "none";
}

function JoinCourse4() {
    courseCards.style.display = "none";
    courseList4.style.display = "block";
    keySctions.style.display = "none";
}

function JoinCourse5() {
    courseCards.style.display = "none";
    courseList5.style.display = "block";
    keySctions.style.display = "none";
}
function JoinCourse6() {
    courseCards.style.display = "none";
    courseList6.style.display = "block";
    keySctions.style.display = "none";
}

function JoinCourse7() {
    courseCards.style.display = "none";
    courseList7.style.display = "block";
    keySctions.style.display = "none";
}

function JoinCourse8() {
    courseCards.style.display = "none";
    courseList8.style.display = "block";
    keySctions.style.display = "none";
}
function JoinCourse9() {
    courseCards.style.display = "none";
    courseList9.style.display = "block";
    keySctions.style.display = "none";
}

function backToHome() {
    courseCards.style.display = "block";
    // console.log(courseCards.style.display);
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
}

function startQuiz(){
    let topHeading = document.querySelector(".heading");
    if(inputPassowrd.value === "haseeb"){
        keySctions.style.display = "none";
        topHeading.style.display = "none";
        quizForm.style.display = "block";
        quizForm.style.display = "block";
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your Quiz has been Started",
            showConfirmButton: false,
            timer: 1500
          });
    }else if(inputPassowrd.value === ""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Enter a valid Key...",
          });
    }else{
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
}

let questionGenerate = document.getElementById("questionGenerate");
let option1 = document.getElementById("option1_radio");
let option2 = document.getElementById("option2_radio");
let option3 = document.getElementById("option3_radio");
let option4 = document.getElementById("option4_radio");

let questionNumber = 0;
let score = 0;
let totalQuestions = mcqsQuestion.length;

function loadQuestion() {
    let question = mcqsQuestion[questionNumber];
    questionGenerate.textContent = (questionNumber + 1) + ". " + question.question;
    option1.textContent = question.a;
    option2.textContent = question.b;
    option3.textContent = question.c;
    option4.textContent = question.d;
}

loadQuestion(); // Load the first question


function nextQuestion() {
    let selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please select an option...!",
          });
        return;
    }
    let currentQuestion = mcqsQuestion[questionNumber];
    if (selectedOption.value === currentQuestion.correctAnswer) {
        score++;
    }
    questionNumber++;
    if (questionNumber === mcqsQuestion.length) {
        endQuiz();
        return;
    }

    loadQuestion();
}