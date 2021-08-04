function closeNav() {
  document.getElementById("ul").style.left = "-100%";
  document.getElementById("filter").style.display = "none";
  document.body.style.overflow = "unset";
  document.body.style.height = "auto";
}
function openNav() {
  document.getElementById("ul").style.left = "0%";
  document.getElementById("filter").style.display = "block";
  document.body.style.overflow = "hidden";
    document.body.style.height = "100%";


}

function myFunction() {
  document.body.style.overflow = "hidden";
  document.body.style.height = "100%";
}

function closeMsg() {
  document.getElementById("this").style.display = "none";
  document.getElementById('filter1').style.display = "none";
  document.body.style.overflow = "unset";
  document.body.style.height = "auto";
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