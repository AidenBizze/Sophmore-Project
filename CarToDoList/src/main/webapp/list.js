document.getElementById('addTaskForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const task = document.getElementById('task').value;
  const frequency = document.getElementById('frequency').value;
  const urgency = document.getElementById('urgency').value;

  const newTask = document.createElement('tr');
  newTask.innerHTML = `
    <td>${task}</td>
    <td>${frequency}</td>
    <td><button class="completeTaskButton" data-index="${taskList.rows.length - 1}">Complete</button></td>
    <td>${urgency}</td>
    <td><button class="deleteTaskButton">Delete</button></td>
  `;

  const completeTaskButton = newTask.querySelector('.completeTaskButton');
  completeTaskButton.addEventListener('click', function() {
    newTask.classList.toggle('completed');
  });

  const deleteTaskButton = newTask.querySelector('.deleteTaskButton');
  deleteTaskButton.addEventListener('click', function() {
    newTask.remove();
  });

  const taskList = document.getElementById('taskList');
  taskList.appendChild(newTask);
});