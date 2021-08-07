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
  document.getElementById('filter1').style.display = "none";
  document.body.style.overflow = "unset";
  document.body.style.height = "auto";
}
