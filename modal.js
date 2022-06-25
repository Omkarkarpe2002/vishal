var modals = document.querySelectorAll('.modal');
// Get the button that opens the modal
var btn = document.querySelectorAll("button.bookbtn");



var span = document.getElementsByClassName("close");

for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function(e) {
     e.preventDefault();
     modal = document.querySelector(e.target.getAttribute("href"));
     modal.style.display = "block";
  }
 }

for (var i = 0; i < span.length; i++) {
  span[i].onclick = function() {
     for (var index in modals) {
       if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
  }
 }
 
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
   for (var index in modals) {
    if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
   }
  }
}