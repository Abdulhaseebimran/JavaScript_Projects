const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value == '') {
        alert("You must write something!");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        saveData();
    }
    else if (ev.target.tagName === 'SPAN') {
        ev.target.parentElement.remove();
        // div.remove();
        saveData();
    }

},
    false);

function saveData() {
    localStorage.setItem('Data', listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('Data');
}
showTask();