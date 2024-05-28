// Question Tracker in object's

let questionTracker = document.getElementById("question-tracker");
let submitBtn = document.getElementById("submit-question");

// Retrieve questionInput from localStorage or initialize an empty array
let questionInput = localStorage.getItem("questionInput")
  ? JSON.parse(localStorage.getItem("questionInput"))
  : [];

submitBtn.addEventListener("click", function () {
  let linesSplit = questionTracker.value.split("\n");
  questionInput = [];

  for (let i = 0; i < linesSplit.length; i++) {
    let line = linesSplit[i].trim();
    if (line !== "") {
      const [question, answer] = line.split("?").map((item) => item.trim());
      questionInput.push({ question, answer });
    }
    console.log(questionInput);
    // console.log(JSON.stringify(questionInput));
  }

  // Store the updated questionInput array in localStorage
  localStorage.setItem("questionInput", JSON.stringify(questionInput));
});
