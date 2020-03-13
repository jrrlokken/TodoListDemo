const results = document.getElementById('results');
const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
// const todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
const todos = [];

const todoMaker = text => {
  const newTodo = document.createElement('li');
  const newSpan = document.createElement('span');
  newSpan.textContent = 'X';
  newTodo.append(newSpan);
  newTodo.append(text);
  results.append(newTodo);
  todos.push(text);
}

todos.forEach(todo => {
  todoMaker(todo);
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
  let todoText = input.value;
  todoMaker(todoText);
  // localStorage.setItem("todos", JSON.stringify(todos));
  form.reset();
});

results.addEventListener('click', function() {
	if (event.target.tagName === 'LI') {
		event.target.classList.toggle('completed');
	} else if (event.target.tagName === 'SPAN') {
    // const todo = event.target.parentElement.textContent;
    event.target.parentElement.remove();
  }
});