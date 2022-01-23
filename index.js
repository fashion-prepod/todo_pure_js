// create add update delete element DOM CRUD
// attributes
// data attr
// js modules
// localstorage
// git branches

const userInput = document.querySelector('.user-input');
const addBtn = document.querySelector('.add');
const todoList = document.querySelector('.todo-list');
const todos = [];

const generateTodo = (innerText) => {
    const myDiv = document.createElement('div');
    myDiv.classList.add('todo');
    myDiv.insertAdjacentHTML(
        `afterbegin`,
        `
            <i class="fas fa-trash"></i>
            <i class="far fa-check-circle"></i>
            <p class="todo__text">${innerText}</p>
        `);

    return myDiv;
};

{/* <i class="fas fa-check-circle"></i> */}

const addTodo = () => {
    if (userInput.value === '') {
        return;
    }

    const todo = generateTodo(userInput.value);
    const id = String(Math.random());
    const todoModel = {id, text: userInput.value, done: false, anchor: todo};
    todos.push(todoModel);
    userInput.value = '';
    userInput.focus();
    todo.id = id;
    todoList.append(todo); 
};

addBtn.addEventListener('click', addTodo);

userInput.addEventListener('keydown', ({keyCode}) => {
    if (keyCode === 13) {
        addTodo();
    }
});


let origin = 'https://github.com/fashion-prepod/todo_pure_js.git';


todoList.addEventListener('click', function ({target}) {
    if (target.classList.contains('fa-trash')) {
        // target.parentElement.remove();
        target.closest('.todo').remove();
    }
});


todoList.addEventListener('click', function ({target}) { // p, button, i

    if (target.classList.contains('fa-check-circle')) {
        const clickedTodo = todos.find((todo) => todo.id === target.parentElement.id);
    
        clickedTodo.done = !clickedTodo.done;

        if (clickedTodo.done) {
            target.parentElement.classList.add('done');
            target.classList.replace('far', 'fas');
        } else {
            target.parentElement.classList.remove('done');
            target.classList.replace('fas', 'far');
        }
            

        console.log(todos);
    }


      

});


