import './sass/main.scss';
import './sidebar';
import { format } from 'date-fns'
const main = document.querySelector(".main");
const popUpNew = document.querySelector(".popup-new");
const formNew = document.querySelector(".make-new")




const popCreateNewSubmitButton = document.querySelector(".make-new-info-container-button");


// Create new pop screen
const openPopCreateNewButton = document.querySelector(".sidebar-button-new");

const popUpNewCloseButton = document.querySelector(".make-new-header-container-xButton")

// The x button to close the pop screen
popUpNewCloseButton.addEventListener('click', e => {
  popUpNew.classList.toggle("hidden");
})

// The button that opens the create new pop screen
openPopCreateNewButton.addEventListener('click', () => {
  console.log("open create new");
  popUpNew.classList.toggle("hidden");
})


// If input check is checked mak echanges to the container
// const check = document.querySelector(".todos-input");
// const text = document.querySelector(".todos-text");
// check.addEventListener('click', () => {
//   if(check.checked){
//     text.classList.add("-done");
//   }else{
//     text.classList.remove("-done");
//   }
// })






const toDosManager = (function (){
  let currentState = "today";

  // Get the current state in the sidebar
  const getState = () => {
    return currentState;
  };

  const changeState = (newState) => {
    currentState = newState;
  }

  // Delete todo function
  const deleteToDo = (e, todos, main) => {
    const item = e.target;
    console.log(item.parentElement.getAttribute("index"));
    console.log(item.parentElement.getAttribute("state"))
    const state = item.parentElement.getAttribute("state")
    todos[state].splice(item.parentElement.getAttribute("index"),1);
    getAllTodos(todos,main);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const checkIfDone = (e, todos, main) => {
    const item = e.target;
    console.log(item.parentElement);
    item.parentElement.classList.toggle("todos-done");
    item.parentElement.children[1].classList.toggle("todos-text-done");
    item.parentElement.children[2].classList.toggle("todos-date-done");
  }

  const checkDateLenght = (newDate) => {
    const today = new Date();
    const checkDate = new Date(newDate);
    // Checks if the date happens today
    if(checkDate.getDate() == today.getDate() && checkDate.getMonth() == today.getMonth() && checkDate.getFullYear() == today.getFullYear()){
      console.log("state today");
      // Change state
      changeState('today');
      return;
    }
    // Checks if date happens in the next 7 days
    if(checkDate.getDate() <= today.getDate() + 7 && checkDate.getMonth() == today.getMonth() && checkDate.getFullYear() == today.getFullYear()){
      console.log("state week");
      changeState('week');
      return;
    }
    // Default option is the month
    console.log("state month");
    changeState('month');
    return;
  
  }


  const getAllTodos = (todos, main) => {
    main.innerHTML = "";

    for (const todo in todos) {
      todos[todo].forEach((todo, i) => {

        // Main container for todo
        const todoContainer = document.createElement("div");
        todoContainer.classList.add("todos");
        todoContainer.setAttribute("index", i);
        console.log(todo.state);
        todoContainer.setAttribute("state", `${todo.state}`);
        

        // The checkbox in the todo
        const todoCheckbox = document.createElement("input");
        todoCheckbox.type = "checkbox";
        todoCheckbox.classList.add("todos-input");
        todoCheckbox.addEventListener('click', (e) => checkIfDone(e, todos, main));
        todoContainer.appendChild(todoCheckbox);


        // Text in the todo
        const todoText = document.createElement("div");
        todoText.classList.add("todos-text");
        todoText.textContent = todo.name;
        todoContainer.appendChild(todoText);

        // The date shown in the todo
        const todoDate = document.createElement("div");
        todoDate.classList.add("todos-date");
        // Format the date 
        const dateValue = new Date(todo.date);
        const day = format(dateValue, 'do');
        const month = format(dateValue, 'MMM');
        const fullDate = `${month} ${day}`;
        todoDate.textContent = fullDate;
        todoContainer.appendChild(todoDate);

        // The edit and delete button in the todo
        const todoEdit = document.createElement("button");
        const todoDelete = document.createElement("button");
        todoEdit.classList.add("todos-edit");
        todoDelete.classList.add("todos-delete");
        todoEdit.textContent = 'Edit';
        todoDelete.textContent = 'Delete';
        todoDelete.addEventListener('click', (e) => deleteToDo(e, todos, main));
        todoContainer.appendChild(todoEdit);
        todoContainer.appendChild(todoDelete);

        // Add the todo in the main container so it's shown
        main.appendChild(todoContainer);


      })
    }
    // Save todos in the localstorage
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const createToDo = (name, date) => {
    // Get the state from function and change it in the function
    checkDateLenght(date);
    const state = getState();
      return{
        name, 
        date, 
        state
      }
  };

  const addToDo = (e, todos, main, popUpNew) => {
    e.preventDefault();
    const title = document.querySelector("#make-new-title").value;
    const date = document.querySelector("#make-new-date").value;
    const newToDo = createToDo(title, date);
    const state = getState();
    console.log(state);
    todos[state].push(newToDo);

    
    getAllTodos(todos, main);
    

    popUpNew.classList.toggle("hidden");
  }
  return{
    createToDo, 
    addToDo, 
    getAllTodos
  }
})();


// Get todos from localstorage
const todos = JSON.parse(localStorage.getItem("todos")) || {"today": [], "week": [], "month": []};
// Make a todo if theres none
if(!localStorage.getItem("todos")){
  todos.home.push(toDosManager.createToDo("hey","2021-12-12"));
}


popCreateNewSubmitButton.addEventListener('click', e => {
  toDosManager.addToDo(e, todos, main, popUpNew);
  console.log("create new pressed");
})


toDosManager.getAllTodos(todos, main);