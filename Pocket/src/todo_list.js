class ToDoItem {
  constructor(todoText, done=false) {
    this.done = done;
    this.todoText = todoText;
  }

  generateElement() {
    let outerdiv = document.createElement('li');
    let label = document.createElement('span');
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    this.done ? checkBox.checked = true : null;
    checkBox.addEventListener('click', this.checkBoxClicked);
    let p = document.createElement('span');
    p.textContent = this.todoText;
    label.appendChild(checkBox);
    outerdiv.appendChild(label);
    outerdiv.appendChild(p);
    return outerdiv;
  }
  checkBoxClicked(e) {
    this.done = e.target.checked;
    console.log(this.done);
  }
}


class ToDoList {
  constructor() {
    this.todos = [];
    this.ul = document.querySelector('.todos'); 
    this.todoForm = document.querySelector('.add-todo-form');
    this.todoForm.addEventListener('submit', this.addTodo.bind(this));
    this.populateList();
  }

  addTodo(e) {
    e.preventDefault();
    let input = document.querySelector("[name='add-todo']")
    let inputText = input.value;
    let todoitem = new ToDoItem(inputText);
    this.todos.push(todoitem);
    // console.log(JSON.stringify(this.todos));
    let todosJSON = this.todos.map(el => {let o = new Object(); o.todoText = el.todoText; o.done = el.done; return o;} )
    // console.log(todosJSON);
    localStorage.setItem("todosArr", JSON.stringify(todosJSON))

    input.value = '';
    this.populateList();
  }

  populateList() {
    removeAllChildNodes(this.ul);
    let todosJSON = JSON.parse(localStorage.getItem("todosArr"));
    console.log(localStorage);
    // console.log(todosJSON);
    this.todos = [];
    Object.keys(todosJSON).forEach(key => {
      this.todos.push(new ToDoItem(todosJSON[key].todoText, todosJSON[key].done));
    })
    this.todos.forEach(todo => {
      this.ul.appendChild(todo.generateElement());
    })

  }
  
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const toDoList = new ToDoList();
console.log(toDoList)