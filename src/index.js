import './sass/main.scss';
const getTodos = () => {
  let todos;
  if(localStorage.getItem("todos") === null){
    todos = [];
  }else{
    JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach
}