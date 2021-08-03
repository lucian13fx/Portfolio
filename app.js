function closeNav() {
  document.getElementById("ul").style.left = "-100%";
  document.getElementById("filter").style.display = "none";
}
function openNav() {
  document.getElementById("ul").style.left = "0%";
  document.getElementById("filter").style.display = "block";
}

function closeMsg() {
  document.getElementById("this").style.display = "none";
}

/*--------------------CSS Page App---------------------------*/
document.getElementById("defaultOpen").click();

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById("wc").style.display = "none";
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}