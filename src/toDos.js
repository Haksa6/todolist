import { format } from 'date-fns'

export const toDosManager = (function (){
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
    console.log(item.parentElement.getAttribute("state"));
    const state = item.parentElement.getAttribute("state");
    todos[state].splice(item.parentElement.getAttribute("index"),1);
    getAllTodos(todos,main);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const checkIfDone = (e, todos) => {
    const item = e.target;
    console.log(item.parentElement.children[0].value);
    item.parentElement.classList.toggle("todos-done");
    item.parentElement.children[1].classList.toggle("todos-text-done");
    item.parentElement.children[2].classList.toggle("todos-date-done");

    const state = item.parentElement.getAttribute("state");
    const index = item.parentElement.getAttribute("index");
    todos[state][index].done = !todos[state][index].done
    localStorage.setItem("todos", JSON.stringify(todos));
  }


  // Add the todo in the right date container
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

  // Get all the todos at home page
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
        if(todo.done){
          addCheck(todoContainer);
        }
        // Add the todo in the main container so it's shown
        main.appendChild(todoContainer);


      })
    }
    // Save todos in the localstorage
    localStorage.setItem("todos", JSON.stringify(todos));
  };



  // Get only certain date range todos
  const getCertainStateTodos = (todos, main, folder) => {

    const stateTodos = todos[folder];
    console.log(folder);
    
    main.innerHTML = "";

    // Return if empty
    if(stateTodos.length === 0){
      return;
    }

    
    stateTodos.forEach((todo, i) => {

      // Main container for todo
      const todoContainer = document.createElement("div");
      todoContainer.classList.add("todos");
      todoContainer.setAttribute("index", i);
      todoContainer.setAttribute("state", `${todo.state}`);
        

      // The checkbox in the todo
      const todoCheckbox = document.createElement("input");
      todoCheckbox.type = "checkbox";
      todoCheckbox.classList.add("todos-input");
      todoCheckbox.addEventListener('click', (e) => checkIfDone(e, todos));
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
      if(todo.done){
        addCheck(todoContainer);
      }


      // Add the todo in the main container so it's shown
      main.appendChild(todoContainer);
    })
    
    // Save todos in the localstorage
    localStorage.setItem("todos", JSON.stringify(todos));
  };


  

  // Checks if the todo item is done so it stays checked when page is reloaded
  const addCheck = (todo) => {
    todo.classList.toggle("todos-done");
    
    todo.children[0].checked = !todo.children[0].checked;
    
    todo.children[1].classList.toggle("todos-text-done");
    todo.children[2].classList.toggle("todos-date-done");

  };

  const addToDo = (e, todos, main, popUpNew, formNew) => {
    e.preventDefault();
    const title = document.querySelector("#make-new-title").value;
    const date = document.querySelector("#make-new-date").value;
    const newToDo = createToDo(title, date);
    const state = getState();
    
    console.log(state);
    
    todos[state].push(newToDo);
    getAllTodos(todos, main);
    popUpNew.classList.toggle("hidden");
    formNew.reset();
  };


  const createToDo = (name, date, done=false) => {
    // Get the state from function and change it in the function
    checkDateLenght(date);
    const state = getState();
      return{
        name, 
        date, 
        state, 
        done
      }
  };

  return{
    createToDo, 
    addToDo, 
    getAllTodos,
    getCertainStateTodos,
    changeState,
    deleteToDo,
    checkIfDone,
    checkDateLenght,
    getState,
    addCheck
  }
})();