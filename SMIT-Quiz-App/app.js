// SMIT Quiz App

let mcqsQuestion = [
    {
        question: "1- What does CSS stand for?",
        a: "Creative Style Sheets",
        b: "Cascading Style Sheets",
        c: "Computer Style Sheets",
        d: "Colorful Style Sheets"
    },
    {
        question: "2- Which HTML tag is used to define an unordered list?",
        a: "<list>",
        b: "<ul>",
        c: "<ol>",
        d: "<li></li>"
    },
    {
        question: "3- Which of the following is NOT a valid JavaScript data type?",
        a: "string",
        b: "boolean",
        c: "character",
        d: "number"
    },
    {
        question: "4- What does the 'href' attribute in the anchor tag (<a>) specify?",
        a: "The height of the link",
        b: "The color of the link",
        c: "The destination URL of the link",
        d: "The font family of the link"
    },
    {
        question: "5- In JavaScript, which keyword is used to declare a variable?",
        a: "var",
        b: "let",
        c: "const",
        d: "set"
    },
    {
        question: "6- Which CSS property is used to change the color of text?",
        a: "text-color",
        b: "color",
        c: "font-color",
        d: "text-style"
    },
    {
        question: "7- What does the HTML <canvas> element provide?",
        a: "A container for graphics",
        b: "A container for text",
        c: "A container for audio",
        d: "A container for video"
    },
    {
        question: "8- Which method is used to add a new element to the end of an array in JavaScript?",
        a: "append()",
        b: "push()",
        c: "add()",
        d: "insert()"
    },
    {
        question: "9- What is the purpose of the CSS property 'float'?",
        a: "To align text within a block",
        b: "To clear floated elements",
        c: "To position an element to the right or left of its container",
        d: "To set the opacity of an element"
    },
    {
        question: "10- What does the JavaScript function 'querySelector()' do?",
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
}

// function startQuiz() {
//     if()

// }

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