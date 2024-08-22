document.getElementById('add-todo').addEventListener('click', function() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();                                                                                    

    if (todoText !== '') {
        const todoList = document.getElementById('todo-list');

        const li = document.createElement('li');
        li.textContent = todoText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        deleteButton.onclick = function() {
            todoList.removeChild(li);
        };

        li.appendChild(deleteButton);
        todoList.appendChild(li);

        todoInput.value = '';
    }
});
