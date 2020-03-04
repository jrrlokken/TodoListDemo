const results = document.getElementById('results');
const input = document.querySelector('input[type="text"]');

input.addEventListener('keypress', function(event) {
	if (event.keyCode === 13) {
		let newTodo = document.createElement('li');
		let newSpan = document.createElement('span');
		let newIcon = document.createElement('i');
		results.append(newTodo);
		textContent = input.value;
		newTodo.append(newSpan);
		newSpan.append(newIcon);
		newIcon.classList.add('fa', 'fa-trash');
		newTodo.append(textContent);
		input.value = '';
	}
});

results.addEventListener('click', function() {
	console.log(event.target.tagName);
	if (event.target.tagName === 'LI') {
		event.target.classList.toggle('completed');
	} else if (event.target.tagName === 'SPAN') {
		event.target.parentElement.remove();
	} else if (event.target.tagName === 'I') {
		event.target.parentElement.parentElement.remove();
	}
});



// Then, add local storage