const addTask = document.getElementById('add-task');
const input = document.getElementById('input-task');
const list = document.getElementById('list-container');

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
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function() {
    taskItem.classList.toggle('completed');
  });
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
    taskItem.remove();
  });
  const controlContainer = document.createElement('div');
  controlContainer.appendChild(checkbox);
  controlContainer.appendChild(deleteButton);
  taskItem.appendChild(controlContainer);
}
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    event.target.parentNode.remove();
  }
});

const deleteCompletedTasksButton = document.getElementById('delete-completed-tasks');
deleteCompletedTasksButton.addEventListener('click', function() {
  const completedTasks = document.querySelectorAll('.task-item.completed');
  completedTasks.forEach(task => task.remove());
});