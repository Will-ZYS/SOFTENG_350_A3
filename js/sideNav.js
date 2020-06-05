// JavaScript Document

doShare("sideNavItem-MyDrive")
function doShare(fileName) {
  // Active toggle the left option
  var i;
  var x = document.getElementsByClassName("sideNavItem");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" sideNavItem-active", "");
  }
  document.getElementById(fileName).className += " sideNavItem-active";

  // Swapping out the main screen
  x = document.getElementsByClassName("div-main-contents");
  for (i = 0; i < x.length; i++) {
  	// Stopping the refresh if the sideNav item is clicked again
  	if (x[i].style.display == "block") {
  		if (x[i] == fileName){return;}
  	}
    x[i].style.display = "none";
    x[i].className = x[i].className.replace(" w3-animate-opacity", "");
  }
  if (fileName=="sideNavItem-MyDrive"){
  	document.getElementById("div-main-contents1").style.display = "block";
  	document.getElementById("div-main-contents1").className += " w3-animate-opacity";
  } else if(fileName=="sideNavItem-Shared"){
  	document.getElementById("div-main-contents2").style.display = "block";
  	document.getElementById("div-main-contents2").className += " w3-animate-opacity";
  } else{
    document.getElementById("div-main-contents3").style.display = "block";
    document.getElementById("div-main-contents3").className += " w3-animate-opacity";
  }
}