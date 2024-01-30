// facbook post clone

let postBackground = document.getElementById("postBackground");
let postButton = document.getElementById("postButton");
let contentInput = document.getElementById("content");

function setBackground() {
  postBackground.style.backgroundImage = "url(" + event.target.src + ")";
  postBackground.style.backgroundSize = "cover";
  postBackground.style.backgroundPosition = "center";
  postBackground.style.backgroundRepeat = "no-repeat";
}

function removeBackground() {
  postBackground.style.backgroundImage = "none";
  postBackground.style.backgroundColor = "white";
}

function chooseBackgroundWithColor() {
  postBackground.style.backgroundColor = event.target.value;
  if (event.target.value == "white") {
    postBackground.style.backgroundImage = "none";
  }
}

function changedColor() {
  postBackground.style.backgroundColor = event.target.value;
}

function changeStyle() {
  let type = event.target.name;
  let parentListItem = event.target.parentNode;
  let typeofStyle = event.target.id;
  let typeById = event.target.tagName;

  if (type === "bold") {
    if (postBackground.style.fontWeight === "bold") {
      postBackground.style.fontWeight = "normal";
      parentListItem.style.backgroundColor = "white";
    } else {
      postBackground.style.fontWeight = "bold";
      parentListItem.style.backgroundColor = "#ccc";
    }
  }
  if (type === "italic") {
    if (postBackground.style.fontStyle === "italic") {
      postBackground.style.fontStyle = "normal";
      parentListItem.style.backgroundColor = "white";
    } else {
      postBackground.style.fontStyle = "italic";
      parentListItem.style.backgroundColor = "#ccc";
    }
  }
  if (type === "underline") {
    if (postBackground.style.textDecoration === "underline") {
      postBackground.style.textDecoration = "none";
      parentListItem.style.backgroundColor = "white";
    } else {
      postBackground.style.textDecoration = "underline";
      parentListItem.style.backgroundColor = "#ccc";
    }
  }

  if (typeofStyle === "textAlign") {
    if (postBackground.style.textTransform === "uppercase") {
      postBackground.style.textTransform = "none";
      event.target.style.backgroundColor = "white";
    } else {
      postBackground.style.textTransform = "lowercase";
      event.target.style.backgroundColor = "rgb(222, 222, 222)";
    }
  }

  if(typeById === "I"){
    if (postBackground.style.textAlign === "center") {
        postBackground.style.textAlign = "left";
        parentListItem.style.backgroundColor = "white"
    }
    else {
        postBackground.style.textAlign = "center";
        parentListItem.style.backgroundColor = "rgb(222, 222, 222)"
    }
  }
}


function increaseFontSize (){
    let fontSize = parseInt(window.getComputedStyle(postBackground, null).getPropertyValue('font-size'));
    postBackground.style.fontSize = (fontSize + 1) + 'px';
}

function decreaseFontSize (){
    let fontSize = parseInt(window.getComputedStyle(postBackground, null).getPropertyValue('font-size'));
    postBackground.style.fontSize = (fontSize - 1) + 'px';
}

function clearText (){
    postBackground.value = "";
}


function post(){
    let createPostHeading = document.getElementById("createPost");
    let backgroundStyles = document.getElementById("backgroundStyles");
    let textStyles = document.getElementById("textStyles");
    let feedback = document.getElementById("feedback");
    let friends = document.getElementById("friends");
    let postTime = document.getElementById("post-time");
    let horizontalLine = document.getElementById("horizontal-line");
    let feedbackBtn = document.getElementById("feedback");

    if(postBackground === ""){
       postBackground.style.border = "1px solid red";
       postBackground.style.borrderRadius = "5px";
       friends.style.display = "flex";
       feedback.style.display = "block";
       backgroundStyles.style.display = "none";
       textStyles.style.display = "none";
       postTime.style.display = "none";
       horizontalLine.style.display = "none";
       feedbackBtn.style.display = "none";

    }else{
        postBackground.style.border = "none";
        friends.style.display = "none";
        feedback.style.display = "none";
        backgroundStyles.style.display = "none";
        textStyles.style.display = "none";
        createPostHeading.innerHTML = "Your post has been posted successfully";
        postTime.style.display = "none";
        horizontalLine.style.display = "none";
        postBackground.setAttribute("readonly", true);
        feedbackBtn.style.display = "block";
    }
}

function likePost(){
    let likeByClass = event.target.id;

    if(likeByClass === "like"){
        event.target.style.color = "blue";
        event.target.style.fontWeight = "bold";
    }else{
        event.target.style.color = "blue";
    }
}
