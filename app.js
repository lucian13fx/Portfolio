function closeNav() {
  document.getElementById("ul").style.left = "-100%";
  document.getElementById("filter").style.display = "none";
  document.body.style.overflow = "unset";
  //  document.body.style.height = "auto";
  document.getElementById("nav").style.top = "0";
}
function openNav() {
  document.getElementById("ul").style.left = "0%";
  document.getElementById("filter").style.display = "block";
  document.body.style.overflow = "hidden";
  document.getElementById("nav").style.top = "-40px";
}

function myFunction() {
  document.body.style.overflow = "hidden";
  document.body.style.height = "100%";
}

function closeMsg() {
  document.getElementById("this").style.display = "none";
  document.getElementById("filter1").style.display = "none";
  document.body.style.overflow = "unset";
  document.body.style.height = "auto";
}

function ght() {
  document.getElementById("wlcmcont").style.marginLeft = "5vw";
  document.getElementById("nav").style.marginTop = "0";
  document.getElementById("scrl").style.bottom = "50px";
}

//Dropdown CSS page

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function drpDown() {
  document.getElementById("toptop").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("side2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

//Dropdown Clone for 500px screens
function drpDown2() {
  document.getElementById("toptop2").classList.toggle("show2");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn2")) {
    var dropdowns = document.getElementsByClassName("side22");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show2")) {
        openDropdown.classList.remove("show2");
      }
    }
  }
};

var icon = document.getElementById("theme");

icon.onclick = function(){
  document.body.classList.toggle("dark-theme");
}
