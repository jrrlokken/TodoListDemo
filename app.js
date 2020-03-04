const results = document.getElementById('results');
const lis = document.querySelectorAll('li');
const icons = document.querySelectorAll('li i');

// Strikethrough to show completed tasks
for (let li of lis) {
	li.addEventListener('click', function() {
		li.classList.toggle('completed');
	});
}

// Allow clicking of the trash icon to remove item
for (let icon of icons) {
	icon.addEventListener('click', function() {
		icon.parentElement.parentElement.remove();
	});
}

const input = document.querySelector('input[type="text"]');
const ul = document.querySelector('ul');

input.addEventListener('keypress', function(event) {
	if (event.keyCode === 13) {
		let newTodo = document.createElement('li');
		let newSpan = document.createElement('span');
		let newIcon = document.createElement('i');
		ul.append(newTodo);
		textContent = input.value;
		newTodo.append(newSpan);
		newSpan.append(newIcon);
		newIcon.classList.add('fa', 'fa-trash');
		newTodo.append(textContent);
		input.value = '';
	}
});

// Still need event listeners for newly added elements
// Then, add local storage