const addTask = document.getElementById('add-task');
const input = document.getElementById('input-task');
const list = document.getElementById('list');

addTask.addEventListener('click', function() {
  if (input.value.length > 0) {
    const newTask = document.createElement('li');
    newTask.className = 'task-item';
    newTask.textContent = input.value;
    list.appendChild(newTask);
    input.value = '';
    createTaskControl(newTask);
  }
});

function createTaskControl(taskItem) {
  const completeButton = document.createElement('button');
  completeButton.textContent = 'Completed';
  completeButton.addEventListener('click', function() {
    taskItem.classList.toggle('completed');
  });
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
    taskItem.remove();
  });
  taskItem.appendChild(completeButton);
  taskItem.appendChild(deleteButton);
}

list.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    event.target.parentNode.remove();
  }
});