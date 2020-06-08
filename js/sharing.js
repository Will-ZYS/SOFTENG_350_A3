function showShare() {
    document.getElementById('id01').style.display = 'block';
}

function toggleAdvancedSharing() {
    // toggle advanced sharing
    if (document.getElementById('advanced-button').innerHTML === "Advanced Sharing") {
        document.getElementById('advanced-sharing').style.display = 'block';
        document.getElementById('advanced-button').innerHTML = "Cancel Advanced Sharing";
    } else {
        cancelAdvancedSharing();
    }
}

function cancelAdvancedSharing() {
    // close the advanced sharing
    document.getElementById('advanced-sharing').style.display = 'none';
    document.getElementById('advanced-button').innerHTML = "Advanced Sharing";

    // uncheck all the groups
    var groups = document.getElementsByClassName("group-check");
    var i;
    for (i = 0; i < groups.length; i++) {
        groups[i].checked = false;
    }
}

function toggleDropDown() {
    // toggle the dropdown
    var list = document.getElementById("access-content");
    if (list.className.indexOf("w3-show") == -1) {
        list.className += " w3-show";
    } else {
        list.className = list.className.replace(" w3-show", "");
    }
}

function select(element) {
    // get the elements
    var content = element.innerHTML;
    var list = document.getElementById("access-content");
    var button = document.getElementById("dropdown-button");

    // change drop down
    button.innerHTML = content + " <i class='fa fa-caret-down'></i>";
    list.className = list.className.replace(" w3-show", "");
}

function submitShare() {
    // when user submit the share
    document.getElementById('id01').style.display = 'none';
    clearSharing();
    document.getElementById('id02').style.display = 'block';
}

function clearSharing() {
    // clear all the sharing fields
    document.getElementById("dropdown-button").innerHTML = "Anyone with the link can view <i class='fa fa-caret-down'></i>";
    document.getElementById("people").value = "";
    document.getElementById("message").value = "";
    cancelAdvancedSharing();
}

window.onclick = (event) => {
    // close drop down when mouse clicked
    if (!event.target.matches('#dropdown-button')) {
        var dropDown = document.getElementById("access-content");
        if (dropDown.classList.contains("w3-show")) {
            dropDown.classList.remove("w3-show");
        }
    }
}