/*
1. Import the pages from home, menu, and about page
2. By default the first page will be the home page
3. When user clicks on the three button it will switch to the tab for that button
*/
import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";
import './style.css';

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

homeBtn.addEventListener("click", function(){
  loadHome();

})
menuBtn.addEventListener("click", function(){
  loadMenu();
})
aboutBtn.addEventListener("click", function(){
  loadAbout();
})
loadHome();