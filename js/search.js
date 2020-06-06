// JavaScript Document

function searchFunction() {
  // Declare variables
  var input, filter, ul, li, card, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("grid");
  li = ul.getElementsByClassName('col');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    card = li[i].getElementsByClassName("w3-card");
    txtValue = card[0].textContent;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "block";
    } else {
      li[i].style.display = "none";
    }
  }
}