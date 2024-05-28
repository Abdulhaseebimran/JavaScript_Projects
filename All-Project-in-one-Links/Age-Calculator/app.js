// age Calculator by using dom manipulations

document.getElementById("ageForms").addEventListener("submit", () => {
  event.preventDefault(); // prevent the form from submitting
  let dob = document.getElementById("dob").value;
  let bodDate = new Date(dob);
  let currentDate = new Date();

  let age = currentDate.getFullYear() - bodDate.getFullYear();
  let month = currentDate.getMonth() - bodDate.getMonth();
  let day = currentDate.getDate() - bodDate.getDate();

  if (month < 0 || (month === 0 && day < 0)) {
    age--;
    month = 12 + month;
    if (day < 0) {
      month--;
      day = 30 + day;
    }
  }

  document.getElementById("age").innerText = "Age: " + age;
  document.getElementById("months").innerText = "Month: " + month;
  document.getElementById("days").innerText = "Day: " + day;

  // console.log(age);
  // console.log(month);
  // console.log(day);

  var ageDiv = document.querySelector("#Calculate-age .age");
  var monthsDiv = document.querySelector("#Calculate-age .months");
  var daysDiv = document.querySelector("#Calculate-age .days");

  ageDiv.style.backgroundColor = "black";
  ageDiv.style.color = "white";

  monthsDiv.style.backgroundColor = "black";
  monthsDiv.style.color = "white";

  daysDiv.style.backgroundColor = "black";
  daysDiv.style.color = "white";
});
