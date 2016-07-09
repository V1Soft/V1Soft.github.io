function droptoggle(id) {document.getElementById(id).classList.toggle("show");}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {openDropdown.classList.remove('show');}
    }
    document.getElementById(id).appendChild('.dropbtn');
 }
}
function dropdown(id) {document.getElementById(id).classList.add("show");}
window.onmouseover = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {openDropdown.classList.remove('show');}
    }
    document.getElementById(id).appendChild('.dropbtn');
 }
}

function dropup(id) {document.getElementById(id).classList.remove("show");}
window.onmouseout = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {openDropdown.classList.remove('show');}
    }
    document.getElementById(id).appendChild('.dropbtn');
 }
}
