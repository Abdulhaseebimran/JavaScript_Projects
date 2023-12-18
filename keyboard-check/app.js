// keyboard check app

const insert = document.getElementById('insert');

window.addEventListener('keydown', (evt) => {
    insert.innerHTML =
        `<div class="color">
    <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${evt.key === " " ? "Space " : evt.key}</td>
    <td>${evt.keyCode}</td>
    <td>${evt.code}</td>
  </tr>
</table>
    </div>`
});