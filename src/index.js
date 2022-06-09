import './sass/main.scss';
import { toDosManager } from './toDos';




const main = document.querySelector(".main");


// Get todos from localstorage
const todos = JSON.parse(localStorage.getItem("todos")) || {"today": [], "week": [], "month": []};
// Make a todo if theres none
if(!localStorage.getItem("todos")){
  todos.month.push(toDosManager.createToDo("Eat nuts","2023-12-12"));
  todos.month.push(toDosManager.createToDo("Eat bigger nuts","2023-11-11"));
}


toDosManager.getAllTodos(todos, main);


// Create new pop screen
const popUpNew = document.querySelector(".popup-new");
const formNew = document.querySelector(".make-new")
const popCreateNewSubmitButton = document.querySelector(".make-new-info-container-button");
const openPopCreateNewButton = document.querySelector(".sidebar-button-new");
const popUpNewCloseButton = document.querySelector(".make-new-header-container-xButton");


// The x button to close the pop screen
popUpNewCloseButton.addEventListener('click', () => {
  formNew.reset();
  popUpNew.classList.toggle("hidden");
})

// The button that opens the create new pop screen
openPopCreateNewButton.addEventListener('click', () => {
  console.log("open create new");
  popUpNew.classList.toggle("hidden");
});

// Submits the new todo
popCreateNewSubmitButton.addEventListener('click', e => {
  toDosManager.addToDo(e, todos, main, popUpNew, formNew);
  console.log("create new pressed");
});

// //Edit pop-window
// const popUpEdit = document.querySelector(".popup-edit");
// const editForm = document.querySelector(".edit");
// const editSubmitButton = document.querySelector(".edit-info-container-button");
// const openEditNewButton = document.querySelectorAll(".todos-edit");
// const popUpEditCloseButton = document.querySelector(".edit-header-container-xButton");

// // The x button in the edit popup
// popUpEditCloseButton.addEventListener('click', () => {
//   console.log("Close edit popup")
//   popUpEdit.classList.toggle("hidden");
// })

// // Opens edit window
// openEditNewButton.forEach((item) => item.addEventListener('click', () => {
//   console.log("open edit new");
//   popUpEdit.classList.toggle("hidden");
// }));


// editSubmitButton.addEventListener('submit', e => {
//   toDosManager.editTodo(e, todos, main, popUpEdit, editForm);
//   console.log("create edit pressed");
// });



// Sidebar functions
const menuItems = document.querySelectorAll(".menu-item");
const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");

  // Toggles active status on the sidebar so you know which page you're on
  function activeItem(){
    menuItems.forEach((item)=>item.classList.remove('highlighted'));
    this.classList.add('highlighted');
  };
  
    // Shows the relevant todos for each
  function folderChange(){
    console.log(this.textContent.toLowerCase());
    const folder = this.textContent.toLowerCase();
    if(folder === 'home') {
      toDosManager.getAllTodos(todos,main);
    } 
    else {
      toDosManager.getCertainStateTodos(todos, main, folder);
    }
  };
  
  // Opens the hamburger menu whne screen size is less than 540px
  function openMenu(){
    hamburger.classList.toggle("hamburger-active");
    if(hamburger.classList.contains("hamburger-active")) {
      sidebar.style.left = "50px";
      }
    else {
      sidebar.style.left = "1000px";
      }
  };
  
  hamburger.addEventListener("click", openMenu);
  menuItems.forEach((item)=> item.addEventListener('click', activeItem));
  menuItems.forEach((item) => item.addEventListener('click', folderChange));













