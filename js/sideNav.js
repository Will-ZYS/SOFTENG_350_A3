// JavaScript Document

doShare("sideNavItem-MyDrive")
function doShare(fileName) {
  var i;
  var x = document.getElementsByClassName("sideNavItem");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" sideNavItem-active", "");
  }
  console.log("abc");
  document.getElementById(fileName).className += " sideNavItem-active";
}