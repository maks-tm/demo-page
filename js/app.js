const menu = document.querySelector('#menu-btn');
const navbar = document.querySelector('.header .navbar');


menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    // rotate();
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// When user click Arrowdown-Icon Rotate Arrowdown-Icon 
// function rotate() {
//   let arrowRotate = document.querySelector('.icon-rotate');
//   let rotateAdd = document.querySelector('.dropbtn');
//   rotateAdd.onclick =() => {
//     arrowRotate.classList.toggle('rotate');
//   }
// }


// Accardion script
// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   });
// }







