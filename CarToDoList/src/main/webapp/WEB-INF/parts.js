const addPart = document.getElementById('add-part');
const input = document.getElementById('input-box');
const partsList = document.getElementById('parts-container');
const list = document.getElementById('list-container');


addPart.addEventListener('click', function() {
  if (input.value.length > 0) {
    const newPart = document.createElement('li');
    newPart.className = 'part-item';
    newPart.textContent = input.value;
    partsList.appendChild(newPart);
    input.value = '';
  }
});

partsList.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.remove();
  }
});

list.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.classList.add('completed');
    setTimeout(() => {
      event.target.remove();
    }, 500);
  }
});