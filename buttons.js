/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
}

function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show");
}

function myFunction5() {
    document.getElementById("myDropdown5").classList.toggle("show");
}
function myFunction6() {
    document.getElementById("myDropdown6").classList.toggle("show");
}

function myFunction7() {
    document.getElementById("myDropdown7").classList.toggle("show");
}
function myFunction8() {
    document.getElementById("myDropdown8").classList.toggle("show");
}
function myFunction9() {
    document.getElementById("myDropdown9").classList.toggle("show");
}
function myFunction10() {
    document.getElementById("myDropdown10").classList.toggle("show");
}
function myFunction11() {
    document.getElementById("myDropdown11").classList.toggle("show");
}

function myFunction12() {
    document.getElementById("myDropdown12").classList.toggle("show");
}
function myFunction13() {
    document.getElementById("myDropdown13").classList.toggle("show");
}
function myFunction14() {
    document.getElementById("myDropdown14").classList.toggle("show");
}
function myFunction15() {
    document.getElementById("myDropdown15").classList.toggle("show");
}
function myFunction16() {
    document.getElementById("myDropdown16").classList.toggle("show");
}

function myFunction17() {
    document.getElementById("myDropdown17").classList.toggle("show");
}
function myFunction18() {
    document.getElementById("myDropdown18").classList.toggle("show");
}
function myFunction19() {
    document.getElementById("myDropdown19").classList.toggle("show");
}
function myFunction20() {
    document.getElementById("myDropdown20").classList.toggle("show");
}
function myFunction21() {
    document.getElementById("myDropdown21").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

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

window.onmouseleave = function(event) {
  if (!event.target.matches('.dropbtn')) {

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
