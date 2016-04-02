function dropdownClick(id) {document.getElementById(id).classList.toggle("show");}
function dropdownLeave(id) {document.getElementById(id).classList.remove("show");}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {openDropdown.classList.remove('show');}
    }
 }
}
