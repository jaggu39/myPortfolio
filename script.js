function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function myfunction(){
  document.getElementsByClassName("text").classList.remove('container1');
 document.getElementsByClassName("text-container").style.display='none'
}
function myfunction2(){
  location.reload();
}