// Toggles active status on the sidebar so you know which page you're on
const menuItems = document.querySelectorAll(".menu-item");
function activeItem(){
  menuItems.forEach((item)=>item.classList.remove('highlighted'))
  this.classList.add('highlighted')
}
const sidebar = document.querySelector(".sidebar");

menuItems.forEach((item)=> item.addEventListener('click',activeItem))


const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  if(hamburger.classList.contains("hamburger-active")){
    sidebar.style.left = "50px";
  }else{
    sidebar.style.left = "1000px";
  }
});


