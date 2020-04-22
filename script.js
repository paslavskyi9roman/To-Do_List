// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// Functions

function addTodo(event) {
  // Prevent form form submitting
  event.preventDefault();

  // ToDo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  // Create Li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  // Checked mark button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);

  // Checked trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);

  // Append to list
  todoList.appendChild(todoDiv);

  // Cleaar Todo input value
  todoInput.value = '';
}

function deleteCheck(e) {
  const item = e.target;

  // Delete ToDo
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    todo.remove();
  }
}
